
<script>
	export /**
	* @type {any}
	*/
	 let title;
    import Header from '../../components/header.svelte'
</script>

<svelte:head>
	<title>killjoy - {title}</title>
</svelte:head>

<Header></Header>
<slot />
