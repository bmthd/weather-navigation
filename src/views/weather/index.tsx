import { supportRegionNameMap, supportRegionSchema } from "./schema";
import { WeatherSection } from "./weather-section";

type SearchParams = { [key: string]: string | string[] | undefined };

export default async function WeatherPage({ searchParams }: { searchParams: Promise<SearchParams> }) {
	const { region } = await searchParams;
	if (!region) {
		return <div>地域が指定されていません</div>;
	}
	if (Array.isArray(region)) {
		return <div>地域は1つだけ指定してください</div>;
	}

	const parsedRegion = supportRegionSchema.safeParse(region);
	if (!parsedRegion.success) {
		return <div>指定された地域はサポートされていません</div>;
	}
	const regionName = parsedRegion.data;

	return (
		<div>
			<h1>{supportRegionNameMap[regionName]}の天気予報</h1>
			<WeatherSection region={regionName} />
		</div>
	);
}
