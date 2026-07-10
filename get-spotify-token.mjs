import fs from 'fs';
import readline from 'readline';

const loadEnv = () => {
  try {
    const envContent = fs.readFileSync('.env.local', 'utf-8');
    const env = {};
    envContent.split('\n').forEach(line => {
      const match = line.match(/^([^=]+)=(.*)$/);
      if (match) env[match[1].trim()] = match[2].trim();
    });
    return env;
  } catch (e) {
    return {};
  }
};

const env = loadEnv();
const CLIENT_ID = env.VITE_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = env.VITE_SPOTIFY_CLIENT_SECRET;
const REDIRECT_URI = 'https://resume-gun.vercel.app/callback';

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error("❌ Error: Missing VITE_SPOTIFY_CLIENT_ID or VITE_SPOTIFY_CLIENT_SECRET in .env.local");
  process.exit(1);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const scopes = 'user-read-currently-playing';
const authUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${CLIENT_ID}&scope=${encodeURIComponent(scopes)}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`;

console.log('\n=============================================');
console.log('🔗 1. คลิกลิงก์ด้านล่างเพื่อเข้าสู่ระบบ Spotify:');
console.log('=============================================\n');
console.log(authUrl);
console.log('\n=============================================');
console.log('⏳ 2. หลังจากกดยอมรับ มันจะพาคุณไปที่เว็บ example.com');
console.log('ให้ก๊อปปี้ URL ทั้งหมดบนช่องค้นหา (ที่ขึ้นต้นด้วย https://example.com/callback?code=...)');
console.log('เอามาวางที่นี่แล้วกด Enter ครับ:\n');

rl.question('👉 วาง URL ตรงนี้: ', async (urlInput) => {
  try {
    const parsedUrl = new URL(urlInput);
    const code = parsedUrl.searchParams.get('code');

    if (!code) {
      console.log('❌ ไม่พบ code ใน URL โปรดลองอีกครั้ง');
      process.exit(1);
    }

    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')
      },
      body: new URLSearchParams({
        code: code,
        redirect_uri: REDIRECT_URI,
        grant_type: 'authorization_code'
      })
    });

    const data = await response.json();
    
    if (data.refresh_token) {
      console.log('\n✅ สำเร็จ! ก๊อปปี้ Refresh Token ด้านล่างนี้:\n');
      console.log('=============================================');
      console.log(`VITE_SPOTIFY_REFRESH_TOKEN=${data.refresh_token}`);
      console.log('=============================================\n');
      console.log('นำไปต่อท้ายในไฟล์ .env.local ได้เลยครับ!\n');
    } else {
      console.log('❌ เกิดข้อผิดพลาด:', data);
    }
  } catch (err) {
    console.log('❌ URL ไม่ถูกต้อง:', err.message);
  }
  
  rl.close();
});
