export default function CV({ html }: { html: any }) {
	useEffect(() => {
		if (html) handleSetData(html)
	}, [html])

	return <>NOT AVAILABLE RIGHT NOW !!</>
}
