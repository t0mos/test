<template>
    <form @submit.prevent="submitForm">
        <div class="form-control">
            <label for="email">Email<span class="required">*</span></label>
            <input id="email" type="email" v-model.trim="$v.email.$model" />
            <div v-if="$v.email.$error">
                <p class="error" v-if="!$v.email.required">Email is required</p>
                <p class="error" v-if="!$v.email.email">Email is not valid</p>
            </div>
        </div>
        <div class="form-control">
            <label for="password"
                >Password<span class="required">*</span></label
            >
            <input id="password" type="password" v-model="$v.password.$model" />
            <div v-if="$v.password.$error">
                <p class="error" v-if="!$v.password.required">
                    Password is required
                </p>
                <p class="error" v-if="!$v.password.minLength">
                    Password should be at least 6 characters
                </p>
            </div>
        </div>
        <button>Login</button>
        <p class="error" v-if="error">
            Fill email and password fileds correctly
        </p>
    </form>
</template>

<script>
import { required, minLength, email } from "vuelidate/lib/validators";
export default {
    data() {
        return {
            email: "",
            password: "",
            error: false,
        };
    },
    methods: {
        submitForm() {
            this.error = false;
            if (
                this.email === "" ||
                this.password === "" ||
                this.password.length < 6
            ) {
                this.error = true;
                return;
            } else {
                this.$router.push("/products");
            }
        },
    },
    validations: {
        email: {
            required,
            email,
        },
        password: {
            required,
            minLength: minLength(6),
        },
    },
};
</script>

<style scoped>
form {
    padding: 20px;
    max-width: 400px;
    margin: 100px auto auto auto;
    border-radius: 6px;
    -webkit-box-shadow: 0px 0px 10px -3px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 10px -3px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 10px -3px rgba(0, 0, 0, 0.75);
}
.form-control {
    margin: 20px 0px;
}
.form-control label {
    display: block;
}
.form-control input {
    width: -webkit-fill-available;
    height: 30px;
    font-size: 20px;
}
button {
    border: none;
    background-color: cadetblue;
    color: white;
    font-size: 16px;
    cursor: pointer;
    padding: 10px 20px;
    border-radius: 6px;
    -webkit-box-shadow: 0px 0px 10px -3px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 10px -3px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 10px -3px rgba(0, 0, 0, 0.75);
}
button:hover {
    box-shadow: none;
}
button:active {
    background-color: #62b8ba;
}
.error,
.required {
    color: red;
}
</style>
