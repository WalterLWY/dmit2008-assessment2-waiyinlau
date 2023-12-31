import { headers } from "next/headers";
import { stripe } from "../../../lib/stripe";

async function POST(request) {
// Remove the console.clear statement upload your
console.clear();
const body = await request.formData();
const formData = new FormData();
const id = body.get("id");
const price = body.get("price");
const quantity = 1;

//Create Checkout Sessions from body params.
const checkoutSession = await stripe.checkout.sessions.create({
mode: "payment",
line_items: [
{
price:"price_1ONjpPGevZsMT7u0P4Gxz1yX",
quantity:quantity,
},
],
success_url: `${headers().get("origin")}/success`,
cancel_url: `${headers().get("origin")}/canceled`,
automatic_tax: { enabled: true },
});

// redirect(checkoutSession.url)
return Response.redirect(checkoutSession.url);
}
export { POST };