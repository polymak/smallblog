<template>
    <div class="site">
        <div>
            <h1>Qui nous sommes?</h1>
            <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam</P>
            <div class="rowabout">
                <div>
                    <img src="../assets/aboutimg1.png" alt="">
                </div>
                <div>
                    <img src="../assets/aboutimg3.png" alt="">
                </div>
                <div>
                    <img src="../assets/aboutimg4.png" alt="">
                </div>
                <div>
                    <img src="../assets/aboutimg2.png" alt="">
                </div>
            </div>
            <div>
                <h1>NOTRE EQUIPE </h1>
            </div>
            <div class="team">
                <div>
                    <img src="../assets/team/poly.png" class="imgteam" alt="polymak">
                    <h3>POLYMAK</h3>
                    <h4>Informaticien</h4>
                    <ul>
                        <li><a href="http://facebook.com">facebook</a></li>
                        <li><a href="http://twitter.com">twitter</a></li>
                        <li><a href="http://linkedin">linkedin</a></li>
                        <li><a href="mailto:yourmail@domain.com">yourmail@domain.com</a></li>
                        <li><a href="tel:+243822012578">+243822012578</a></li>
                    </ul>
                </div>
                <div>
                    <img src="../assets/team/oli.png"  class="imgteam" alt="oesukam">
                    <h3>OESUKAM</h3>
                    <h4>Informaticien</h4>
                    <ul>
                        <li><a href="http://facebook.com">facebook</a></li>
                        <li><a href="http://twitter.com">twitter</a></li>
                        <li><a href="http://linkedin">linkedin</a></li>
                        <li><a href="mailto:yourmail@domain.com">yourmail@domain.com</a></li>
                        <li><a href="tel:+243842757731">+243842757731</a></li>
                    </ul>
                </div>
                <div>
                    <img src="../assets/team/kers.png" class="imgteam" alt="kers">
                    <h3>KERS</h3>
                    <h4>Informaticien</h4>
                    <ul>
                        <li><a href="http://facebook.com">facebook</a></li>
                        <li><a href="http://twitter.com">twitter</a></li>
                        <li><a href="http://linkedin">linkedin</a></li>
                        <li><a href="mailto:yourmail@domain.com">yourmail@domain.com</a></li>
                        <li><a href="tel:+243975860123">+243975860123</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.site {
    margin-bottom: 40px;
    background-image: url(../assets/bgabout.jpg);
}
.rowabout {
    display: inline-flex;
}
.imgteam {
    width: 225px;
    height: 225px;
    border-radius: 500px;
}
.team {
    margin-top: 40px;
    background: #532121;
    display: inline-flex;
}
a, li,h4,h3 {
    list-style: none;
    text-decoration: none;
    text-align: center;
    color: yellow;
}
h4,h3 {
    text-align: center;
    color: #ffffff;
}
p {
    color: #ffffff;
}
h1 {
    margin-top: 50px;
    color: red;
}
</style>
