<article>
    <img src="https://picsum.photos/300/200" alt="">
    <div class="text">
        <h3>some blog post</h3>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed dui fermentum, luctus velit sit amet, volutpat tellus.
        </p>
    </div>
</article>

<style lang="scss">
    article {
        border-radius: 1rem;
        overflow: hidden;
        background-color: $background-light;
    }
    article img {
        width: 100%;
    }

    article .text {
        padding: 10px;
    }

    article h3 {
        margin: 0px;
        color: $primary;

    }
    article p {
        line-height: 1.4rem;
        margin: 4px 0;
    }
</style>