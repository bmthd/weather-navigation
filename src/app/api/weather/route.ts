import { fetchWeather } from "@/api/weather";

export const GET = async (req: Request) => {
  const region = new URL(req.url).searchParams.get("region");
  if (!region) {
    return new Response("地域が指定されていません", {
      status: 400,
      headers: { "Content-Type": "text/plain" },
    });
  }
	try {
    const data = await fetchWeather(region);
	return new Response(JSON.stringify(data), {
		status: 200,
		headers: { "Content-Type": "application/json" },
	});
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return new Response("天気情報の取得に失敗しました", {
      status: 500,
      headers: { "Content-Type": "text/plain" },
    });
  }
};
