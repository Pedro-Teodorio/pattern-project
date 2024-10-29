import { Input } from "./components/Input";
import { useForm } from "react-hook-form";


export default function App() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => console.log(data);
	return (
		<div className=" mx-auto w-full bg-neutral-800 space-y-4 p-6">
			<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
				<Input.Root width="w-80" height="h-10">
					<Input.Icon name="UserRound" />
					<Input.Content placeholder="Nome Completo" type="text" register={{ ...register("name", { required: true }) }} />
				</Input.Root>
				{errors.name && <span className="text-red-500">Campo nome é obrigatório</span>}

				<Input.Root width="w-80" height="h-10" mode="dark">
					<Input.Icon name="IdCard" />
					<Input.Content placeholder="CPF" type="text" register={{ ...register("cpf") }} />
				</Input.Root>

				<button type="submit" className=" w-80 p-2 bg-emerald-500 text-neutral-50 rounded-lg ">
					Enviar
				</button>
			</form>
		</div>
	);
}
