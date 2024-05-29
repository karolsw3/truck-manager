/*
	We use a catch-all route in our @auth slot to close the modal
	because of the behavior described here: https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#active-state-and-navigation
	Since client-side navigations to a route that no longer match the slot will remain visible, we need to match the slot to a route that returns null to close the modal.
* */
export default function CatchAll() {
	return null
}
