export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json({ 
    message: 'Vercel API is working!', 
    timestamp: new Date().toISOString(),
    environment: {
      finnhub: !!process.env.FINNHUB_API_KEY
    }
  });
}
