<script lang="ts" context="module"> 
    import ArticlePreview from '../components/articlepreview.svelte'

    const allPosts = import.meta.glob('./posts/*.{md,svx}')
    let body: Array<any> = [];

    for (let path in allPosts) {
        body.push(
            allPosts[path]().then(({ metadata }) => {
                let slug = path.replace("./posts/", "")
                slug = slug.replace(".svx", "")
                slug = slug.replace(".md", "")

                return { slug, metadata };
            })
        )
    }

    export const load = async () => {
        const posts = await Promise.all(body);

        const sortedPosts = posts.sort((a:any, b:any) => {
            return new Date(b.metadata.posted).getTime() - new Date(a.metadata.posted).getTime();
        }).slice(0, 4)

        return {
            props: { posts: sortedPosts }
        }
    }
</script>

<script lang="ts">
    export let posts:any
</script>


<svelte:head>
	<title>killjoy - home</title>
	<meta property="og:title" content="killjoy.blog">
	<meta property="og:description" content="are you ready to take the red pill">
	<meta property="og:type" content="article"/>
	<meta property="og:image" content="https://killjoy.blog/img/banner.jpg">
	<meta property="og:url" content="https://killjoy.blog/">
</svelte:head>


<div class="container">
    <header>
        <img src="/img/banner.jpg" alt="Welcome To > killjoy_">
    </header>
    
    <main>
        <h2>fresh content</h2>
        <section class="article-row">
            {#each posts as { slug, metadata } }
                <ArticlePreview 
                    slug="{slug}"
                    img="{metadata.thumbnail}"
                    title="{metadata.title}"
                    subtitle="{metadata.subtitle}" />
            {/each}
        </section>
        <div class="all-articles">
            <p>
                <a href="/posts">view all posts</a>
            </p>
        </div>
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

header {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
    margin: 20px;
    border-radius: 1rem;
    overflow: hidden;
}

header img {
    width: 100%;
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

main .all-articles {
    width: 100%;
    display: flex;
    justify-content: flex-end;
}

@media only screen and (max-width: 1000px) {
    header img {
        transform: scale(1.5);
    }

    main section.article-row {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media only screen and (max-width: 768px) {
    header {
        margin: 0;
        border-radius: 0;
    }

    header img {
        transform: scale(2);
    }

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