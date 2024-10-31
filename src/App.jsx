import { ArrowUpRight } from "lucide-react";
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
		<div className="bg-neutral-800 space-y-4 p-6 ">
			<div className="w-full flex justify-center items-center gap-8 flex-col">
				<h1 className="text-2xl text-neutral-50">Crie sua conta</h1>
				<form onSubmit={handleSubmit(onSubmit)} className="max-w-4xl w-full  grid grid-cols-2 gap-4">
					<div className="col-span-2 space-y-1">
						<Input.Root width="xl:col-span-2 lg:col-span-2 md:col-span-2 sm:col-span-2 " height="h-14" mode="dark">
							<Input.Icon name="UserRound" />
							<Input.Content placeholder="Nome Completo" type="text" register={{ ...register("name", { required: true }) }} />
						</Input.Root>
						{errors.name && <p className="text-red-500 ">Campo nome é obrigatório</p>}
					</div>

					<Input.Root width="col-span-2" height="h-14" mode="dark">
						<Input.Icon name="IdCard" />
						<Input.Content placeholder="CPF" type="text" register={{ ...register("cpf") }} />
					</Input.Root>

					<Input.Root width="col-span-2" height="h-14" mode="dark">
						<Input.Icon name="Mail" />
						<Input.Content placeholder="Email" type="text" register={{ ...register("email") }} />
					</Input.Root>

					<Input.Root width="xl:col-span-1 lg:col-span-1 md:col-span-1 col-span-2" height="h-14" mode="dark">
						<Input.Icon name="KeyRound" />
						<Input.Content placeholder="Crie sua senha" type="text" register={{ ...register("password") }} />
					</Input.Root>

					<Input.Root width=" xl:col-span-1 lg:col-span-1 md:col-span-1 col-span-2 " height="h-14" mode="dark">
						<Input.Icon name="Check" />
						<Input.Content placeholder="Confirme sua senha" type="text" register={{ ...register("password") }} />
					</Input.Root>

					<div className="col-span-2 flex flex-col gap-2">
						<button type="submit" className=" w-48 p-2 bg-cyan-500 text-neutral-50 rounded-lg mx-auto">
							Criar Conta
						</button>

						<p className="text-center text-sm text-white flex justify-center gap-2">
							Já possui conta?{" "}
							<a href="#" className="text-cyan-500 flex items-center">
								Acesse sua conta agora
								<ArrowUpRight  className="size-3 inline" />
							</a>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
}
