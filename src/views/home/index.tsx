import Link from "next/link";
import { supportRegionNameMap } from "../weather/schema";

export default function Home() {
	return (
		<div>
			<h1>地域リスト</h1>
			<ul>
				{Object.entries(supportRegionNameMap).map(([region, name]) => (
					<li key={region}>
						<Link href={`/weather?region=${region}`}>{name}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
