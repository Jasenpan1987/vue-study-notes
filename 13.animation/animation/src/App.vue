<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <button class="btn btn-primary" @click="showDiv1 = !showDiv1">Transition</button>
                <br><br>
                <transition name="fade">
                    <div class="alert alert-success" v-if="showDiv1">This is opacity fade in and out</div>
                </transition>
                <transition name="slide">
                    <div class="alert alert-info" v-if="showDiv1" type="animation">This is transition translate </div>
                </transition>
                <transition name="fadeslide">
                    <div class="alert alert-warning" v-if="showDiv1" type="animation">Both transition and animation fade </div>
                </transition>
                <transition name="fade" appear>
                    <div class="alert alert-danger" v-if="showDiv1">Animate in the innitial loading </div>
                </transition>
                <transition
                    enter-active-class="animated bounce"
                    leave-active-class="animated shake"
                >
                    <div class="alert alert-info" v-if="showDiv1">Use animate.css instead of the custom ones</div>
                </transition>
                <br>
                <hr>
                <select v-model="alertAnimation" class="form-control">
                    <option value="fade">Fade</option>
                    <option value="slide">Slide</option>
                </select>
                <br>
                <h3>Select your animation style</h3>
                <transition :name="alertAnimation">
                    <div class="alert alert-success" v-if="showDiv1">Dynamic animation, set from alertAnimation</div>
                </transition>

                <transition name="fade" mode="out-in">
                    <div class="alert alert-success" v-if="showDiv1" key="showdiv1">v-if, showDiv1 == true</div>
                    <div class="alert alert-warning" v-else key="notshowdiv1">v-else, showDiv1 == false</div>
                </transition>

                <hr>
                <h4>Create animation by using javascript hook functions</h4>
                <button class="btn btn-info" @click="showDiv2=!showDiv2">Show/hide</button>
                <br><br>
                <transition
                    @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @enter-cancelled="enterCancelled"

                    @before-leave="beforeLeave"
                    @leave="leave"
                    @after-leave="afterLeave"
                    @leave-cancelled="leaveCancelled"
                    :css="false"
                >
                    <div style="width: 200px; height: 200px; background-color: red" v-if="showDiv2">
                        <strong>We only use js here, although we can use
                            both css and js animation</strong>
                    </div>
                </transition>

                <h3>Toggle Component</h3>
                <button class="btn btn-primary"
                        @click="myToggleComponent=='success-component'? myToggleComponent='danger-component': myToggleComponent='success-component'"
                >Toggle Components</button>
                <br><br>
                <transition
                    name="fade"
                    mode="out-in"
                >
                    <component :is="myToggleComponent"></component>
                </transition>

                <br><br><hr>
                <h3>Transition Group Animation</h3>
                <br><br>
                <button class="btn btn-danger"
                        @click="addOne"
                >Add One</button>
                <br><br>
                <ul class="list-group">
                    <transition-group
                        name="fade"
                    >
                        <li class="list-group-item"
                            v-for="(number, idx) in numbers"
                            style="cursor: ponter"
                            @click="removeItem(idx)"
                            :key="idx"
                        >{{number}}</li>
                    </transition-group>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import SuccessComp from './DynamicCompSuccess.vue';
    import DangerComp from './DynamicCompDanger.vue';

    export default {
        data() {
            return {
                showDiv1: false,
                alertAnimation: 'fade',
                showDiv2: true,
                jsAnimationInitalState: {
                    height: 200,
                    width: 200
                },
                myToggleComponent: 'success-component',

                numbers: [1,2,3,4,5,6]
            }
        },
        methods: {
            beforeEnter(el){
                console.log('Before enter is fired!')
            },
            enter(el, done){
                console.log('Enter is fired!')
                let round = 0;

                let enterInterval = setInterval(()=>{
                    this.jsAnimationInitalState.height += 20;
                    this.jsAnimationInitalState.width += 20;

                    el.style.height = this.jsAnimationInitalState.height + 'px';
                    el.style.width = this.jsAnimationInitalState.width + 'px';

                    console.log(el.style.width)
                    round ++;
                    if(round >=10){
                        clearInterval(enterInterval);
                        done();
                    }
                }, 50)
            },
            afterEnter(el){
                console.log('After enter is fired!')
            },
            enterCancelled(el){
                console.log('Cancel enter is fired!')
            },

            beforeLeave(el){
                this.jsAnimationInitalState.height = 400;
                this.jsAnimationInitalState.width = 400;

                console.log('Before leave is fired!')
            },
            leave(el, done){
                console.log('Leave is fired!')

                let round = 0;
                let leaveInterval = setInterval(()=>{
                    this.jsAnimationInitalState.height -= 20;
                    this.jsAnimationInitalState.width -= 20;

                    el.style.height = this.jsAnimationInitalState.height + 'px';
                    el.style.width = this.jsAnimationInitalState.width + 'px';

                    round ++;
                    if(round >=10){
                        clearInterval(leaveInterval);
                        done();
                    }
                }, 50)
            },
            afterLeave(el){
                console.log('After leave is fired!')
            },
            leaveCancelled(el){
                console.log('Cancel leave is fired!')
            },


            removeItem(idx){
                this.numbers.splice(idx, 1);
            },
            addOne(){
                var index = Math.floor(Math.random() * this.numbers.length);
                this.numbers.splice(index, 0, this.numbers.length+1);
            }
        },
        components: {
            'success-component': SuccessComp,
            'danger-component': DangerComp
        }
    }
</script>

<style>
    /* Fade animation */
    .fade-enter {
        opacity: 0;
    }
    .fade-enter-active {
        transition: opacity 3s;
    }
    .fade-leave {

    }
    .fade-leave-active {
        transition: opacity 3s;
        opacity: 0;
    }

    /* Translate animation */
    .slide-enter {

    }
    .slide-enter-active {
        animation: slide-in 2s ease-out;
    }
    .slide-leave {

    }
    .slide-leave-active {
        animation: slide-out 2s ease-out;
    }
    .slide-move {
        transition: transform 1s;
    }
    @keyframes slide-in {
        from {
            transform: translateX(50px) translateY(50px);
        }
        to {
            transform: translateY(0);
        }
    }
    @keyframes slide-out {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(40px) translateY(40px);
        }
    }

    /* fadeslide Both transition and fade */
    .fadeslide-enter {
        opacity: 0;
    }
    .fadeslide-enter-active {
        animation: move-in 2s ease-out;
        transition: opacity 2s;
    }
    .fadeslide-leave {

    }
    .fadeslide-leave-avtive {
        animation: move-out 2s ease-out;
        transition: opacity 2s;
        opacity: 0;
    }
    @keyframes move-in{
        from {
            transform: translateY(40px)
        }
        to {
            transform: translateY(0)
        }
    }

    @keyframes move-out {
        from {
            transform: translateY(0)
        }
        to {
            transform: translateY(40px)
        }
    }
</style>
