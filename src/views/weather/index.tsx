"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { supportRegionNameMap, supportRegionSchema } from "./schema";
import { WeatherSection } from "./weather-section";

export default function WeatherPage() {
	const searchParams = useSearchParams();
	const region = searchParams.get("region");
	if (!region) {
		return <div>地域が指定されていません</div>;
	}

	const parsedRegion = supportRegionSchema.safeParse(region);
	if (!parsedRegion.success) {
		return <div>指定された地域はサポートされていません</div>;
	}
	const regionName = parsedRegion.data;

	return (
		<div>
			<h1>{supportRegionNameMap[regionName]}の天気予報</h1>
			<Suspense fallback={<div>Loading...</div>}>
				<WeatherSection region={regionName} />
			</Suspense>
		</div>
	);
}
