<script lang="ts" context="module"> 
    import ArticlePreview from '../../components/articlepreview.svelte'

    const allPosts = import.meta.glob('./*.{md,svx}')
    let body: Array<any> = [];

    for (let path in allPosts) {
        body.push(
            allPosts[path]().then(({ metadata }) => {
                let slug = path.replace(".svx", "")
                slug = slug.replace(".md", "")

                return { slug, metadata };
            })
        )
    }

    export const load = async () => {
        const posts = await Promise.all(body);

        const sortedPosts = posts.sort((a:any, b:any) => {
            return new Date(b.metadata.posted).getTime() - new Date(a.metadata.posted).getTime();
        })

        return {
            props: { posts: sortedPosts }
        }
    }
</script>

<script lang="ts">
    export let posts:any
    import Header from '../../components/header.svelte';
</script>

<svelte:head>
	<title>killjoy - posts</title>
	<meta property="og:title" content="killjoy - posts">
	<meta property="og:description" content="all of the killjoy content">
	<meta property="og:type" content="article"/>
	<meta property="og:image" content="https://killjoy.blog/img/banner.jpg">
	<meta property="og:url" content="https://killjoy.blog/">
</svelte:head>

<Header></Header>
<div class="container">
    <main>
        <h2>all posts</h2>
        <section class="article-row">
            {#each posts as { slug, metadata } }
                <ArticlePreview 
                    slug="{slug}"
                    img="{metadata.thumbnail}"
                    title="{metadata.title}"
                    subtitle="{metadata.subtitle}" />
            {/each}
        </section>
    </main>
</div>

<style lang="scss">
.container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    height: 100%;
}

main {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
    padding: 0px 40px 40px 40px;
}

main h2 {
    color: $primary;
    margin: 10px;
    font-weight: 400;
    font-size: 2rem;
    letter-spacing: -0.08rem;
}

main section.article-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-end: 3;
    max-width: 100%;
    column-gap: 20px;
    row-gap: 20px;

}

@media only screen and (max-width: 1000px) {
    main section.article-row {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media only screen and (max-width: 768px) {
    main {
        padding: 0px 20px 20px 20px;
    }

    main h2 {
        margin: 0.8rem 0; 
    }
    main section.article-row {
        grid-template-columns: repeat(2, 1fr);
    }

}

@media only screen and (max-width: 600px) {
    main section.article-row{
        grid-template-columns: auto
    }
}
</style>