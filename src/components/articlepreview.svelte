<script>
    export /**
    * @type {string}
    */
    let slug;

    export /**
    * @type {string}
    */
    let img;

    export /**
    * @type {string}
    */
    let title;

    export /**
    * @type {string}
    */
    let subtitle;
</script>

<a href="/posts/{slug}">
    <article>
        <img src="{img}" alt="">
        <div class="text">
            <h3>{title}</h3>
            <p>
                {subtitle}
            </p>
        </div>
    </article>
</a>


<style lang="scss">

    a {
        text-decoration: none;
        color: $text;
    }

    article {
        height: 100%;
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