<script>
	export /**
	* @type {any}
	*/
	let title;

	export /**
	* @type {any}
	*/
	let subtitle;

	export /**
	* @type {any}
	*/
	let banner;

	export /**
	* @type {any}
	*/
	let slug;

    import Header from '../components/header.svelte'
</script>

<svelte:head>
	<title>{title} - killjoy</title>
	<meta property="og:title" content="{title}">
	<meta property="og:description" content="{subtitle}">
	<meta property="og:type" content="article"/>
	<meta name="twitter:card" content="summary_large_image">
	{#if banner }
		<meta property="og:image" content="https://killjoy.blog{banner}">
	{/if}
	
	{#if slug }
		<meta property="og:url" content="https://killjoy.blog/posts/{slug}">
	{/if}

</svelte:head>

<Header></Header>
<div class="container">
	<header>
		<div class="content">
			<h1 class="title">{title}</h1>
			<h2 class="subtitle">{subtitle}</h2>
		</div>
	</header>
	{#if banner }
		<div class="banner">
			<img src="{banner}" alt="Welcome To > killjoy_">
		</div>
	{/if }
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

	div.banner {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 1000px;
		margin: 20px;
		border-radius: 1rem;
		overflow: hidden;
	}

	div.banner img {
		width: 100%;
	}


	main {
		padding: 40px;
		padding-top: 10px;
		width: 80%;
		max-width: 1000px;
	}

</style>