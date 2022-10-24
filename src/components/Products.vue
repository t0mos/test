<template>
    <div class="container">
        <div
            class="card"
            v-for="product in products"
            :key="product.id"
            :id="product.id"
        >
            <div class="card__img">
                <img
                    :src="product.thumbnail"
                    :alt="'Image of' + product.title"
                />
            </div>
            <div class="card__body">
                <div class="card__info">
                    <h3 class="card__title">
                        {{ product.title }}
                    </h3>
                    <p class="card__price">$ {{ product.price }}</p>
                </div>
                <p class="card__brand">
                    {{ product.brand }}
                </p>
                <p class="card__description">{{ product.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            products: "",
        };
    },
    created() {
        this.getData();
    },
    methods: {
        async getData() {
            const res = await fetch("https://dummyjson.com/products");
            const json = await res.json();
            console.log(json);
            this.products = json.products;
        },
    },
};
</script>

<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    margin: 100px;
    justify-content: space-between;
}
.card {
    flex: 0 0 30%;
    margin-bottom: 50px;
    border-radius: 6px;
    -webkit-box-shadow: 0px 0px 10px -3px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 10px -3px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 10px -3px rgba(0, 0, 0, 0.75);
    overflow: hidden;
}
/* .card:hover .card__img img {
    transform: scale(1.1);
} */
.card__img {
    height: 200px;
    width: auto;
    overflow: hidden;
}
.card__img img {
    width: -webkit-fill-available;
    /* transition: 0.5 ease; */
}
.card__body {
    padding: 20px;
}
.card__info {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.card__title,
.card__brand,
.card__price {
    margin-bottom: 0;
    margin-top: 0;
}
.card__brand {
    color: gray;
}
.card__price {
    font-weight: bold;
}
@media only screen and (max-width: 1024px) {
    .card {
        flex: 0 0 48%;
    }
}
@media only screen and (max-width: 768px) {
    .card {
        flex: 0 0 100%;
    }
}
@media only screen and (max-width: 550px) {
    .container {
        margin: 20px;
    }
    .card__info {
        flex-direction: column;
        align-items: flex-start;
    }
}
</style>
