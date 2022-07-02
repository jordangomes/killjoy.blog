<script>
	export /**
	* @type {any}
	*/
	let title;

	export /**
	* @type {any}
	*/
	let subtitle;

    import Header from '../components/header.svelte'
</script>

<svelte:head>
	<title>killjoy - {title}</title>
</svelte:head>
<Header></Header>
<div class="container">
	<header>
		<div class="content">
			<h1 class="title">{title}</h1>
			<h2 class="subtitle">{subtitle}</h2>
		</div>
	</header>
	<main>
		<slot />
	</main>
</div>


<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	header {
		background-color: #202020;
		display: flex;
		justify-content: center;
		width: calc(100% - 80px);
		padding: 40px;
	}
	header .content {
		width: calc(80% + 80px);
		max-width: 1000px;
	}
	header h1 {
		color: #ffe000;
		margin: 0;
		margin-bottom: 5px;
	}

	header h2.subtitle {
		margin: 0;
		font-weight: 500;
		font-size: 1.3rem;
	}

	main {
		padding: 40px;
		width: 80%;
		max-width: 1000px;
	}

</style>