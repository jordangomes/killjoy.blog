<script>
import ArticlePreview from '../components/articlepreview.svelte'
</script>

<div class="container">
    <header>
        <img src="/img/banner.jpg" alt="Welcome To > killjoy_">
    </header>
    
    <main>
        <h2>fresh content</h2>
        <section class="article-row">
            <ArticlePreview></ArticlePreview>
            <ArticlePreview></ArticlePreview>
            <ArticlePreview></ArticlePreview>
            <ArticlePreview></ArticlePreview>
        </section>
    </main>
</div>

<style>
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
    margin: 40px;
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