import { Input } from "./components/Input";

export default function App() {
	return (
		<div className="w-full bg-neutral-800 space-y-4 p-6">
			<Input.Root width="w-80" height="h-12">
				<Input.Icon name="UserRound" />
				<Input.Content placeholder="Nome Completo" type="text" name="nome" />
			</Input.Root>

			<Input.Root width="w-80" height="h-10" mode="dark">
				<Input.Content placeholder="Search" type="text" name="search" />
				<Input.Icon name="Search" />
			</Input.Root>
		</div>
	);
}
