<template>
<div class="login">
    <form>
        <h1> Sign in </h1>
        <div class="login_layout">
        <input class="field" type="email" placeholder="Email" />
        <input class="field" type="password" placeholder="Password" />
        <button class="field btn">Sign in</button>
        </div>
        
    </form>
    <form>
        <h1> Sign up </h1>
        <div class="login_layout">
            <input class="field" type="email" placeholder="Email" />
            <input class="field" type="password" placeholder="Password"/>
            <input class="field" type="text" placeholder="Full name"/>
            <input class="field txt" type="image" placeholder="Insert image"/>
            <button class="field btn"> Sign up</button>
        </div>
        
    </form>
</div>
</template>

<style>
.login {
    color: orangered;
    min-height: 100vh;
    display: block;
    align-items: center;
    margin-top: 30px;
}
.login_layout {
    display: flex;
    flex-direction: column;
}
.field {
    padding: 10px 5px;
    margin: 5px 0;
}
</style>