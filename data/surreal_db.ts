import Surreal from "surrealdb";
import "dotenv";

async function connectDB() {
    try {
        await Surreal.Instance.connect(Deno.env.get("DB_URL") ?? 'undefined')
		// Connect to the database
        await Surreal.Instance.signin({
            user: Deno.env.get("DB_USER") ?? "undefined",
            pass: Deno.env.get("DB_PASS") ?? "undefined",
          });
    
        await Surreal.Instance.use(
        Deno.env.get("DB_NAMESPACE") ?? "undefined",
        Deno.env.get("DB_NAME") ?? "undefined"
        );
	} catch (e) {
		console.error('ERROR', e);
	}
}

export { connectDB };
  