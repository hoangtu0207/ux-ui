import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Dangnhap() {
	return (
		<div className="">
			<Header />
				<form
					// {...store.form()}
					// resetOnSuccess={["password"]}
					className="flex flex-col gap-6"
				>
						<>
							<div className="grid gap-6">
								<div className="grid gap-2">
									<label htmlFor="email">Email address</label>
									<input
										id="email"
										type="email"
										name="email"
										required
										autoFocus
										tabIndex={1}
										autoComplete="email"
										placeholder="email@example.com"
									/>
								</div>

								<div className="grid gap-2">
									<div className="flex items-center">
										<label htmlFor="password">
											Password
										</label>
									</div>
									<input
										id="password"
										type="password"
										name="password"
										required
										tabIndex={2}
										autoComplete="current-password"
										placeholder="Password"
									/>
									{/* <InputError message={errors.password} /> */}
								</div>

								<div className="flex items-center space-x-3">
									<checkbox
										id="remember"
										name="remember"
										tabIndex={3}
									/>
									<label htmlFor="remember">
										Remember me
									</label>
								</div>

								<button
									type="submit"
									className="mt-4 w-full"
								>
									Log in
								</button>
							</div>

							{/* {canRegister && (
								<div className="text-center text-sm text-muted-foreground">
									Don't have an account?{" "}
									<TextLink
										href={register()}
										tabIndex={5}
									>
										Sign up
									</TextLink>
								</div>
							)} */}
						</>

				</form>

				{/* {status && (
					<div className="mb-4 text-center text-sm font-medium text-green-600">
						{status}
					</div>
				)} */}
			{/* </AuthLayout>
			); }
			<Footer /> */}
		</div>
	);
}
