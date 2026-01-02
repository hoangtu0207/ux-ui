import { Link } from "react-router-dom";

export default function Header() {
	return (
		<div class="bg-white text-black font-hanken-grotesk pb-20">
			<div class="px-10">
				<nav class="flex items-center justify-between border-b border-white/10 py-4">
					<div>
						<Link to="/">
							<img
								src="/logo.png"
								alt="Logo"
								className="w-10 h-10"
							/>
						</Link>
					</div>
					<div class="space-x-6 font-bold">
						<Link to="#">De thi</Link>
						<Link to="#">FlashCard</Link>
					</div>
					<div class="space-x-6 font-bold flex">
						<form
							method="POST"
							action="/logout"
						>
							<button>Log Out</button>
						</form>
					</div>
					<div class="space-x-6 font-bold">
						<Link to="/register">Sign Up</Link>
						<Link to="/login">Log In</Link>
					</div>
				</nav>
			</div>
		</div>
	);
}
