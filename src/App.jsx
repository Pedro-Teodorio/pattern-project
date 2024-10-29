import { Input } from "./components/Input";

export default function App() {
	return (
		<div className="w-full bg-neutral-800 space-y-4">
			<Input.Root width="w-80" height="h-14">
				<Input.Icon name="UserRound" />
				<Input.Content placeholder="Nome Completo" type="text"/>
			</Input.Root>
			
			<Input.Root width="w-80" height="h-10">
				<Input.Content placeholder="Search" type="text"/>
				<Input.Icon name="Search" />
			</Input.Root>
			
		</div>
	);
}
