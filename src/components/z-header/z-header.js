export default {
    name: 'zHeader',
    props: {
        leftOptions: {
            type: Object,
            default () {
                return {
                    showBack: true,
                    backText: 'Back',
                    preventGoBack: false
                }
            }
        },
        title: String,
        transition: String,
        rightOptions: {
            type: Object,
            default () {
                return {
                    showMore: false
                }
            }
        }
    },
    methods: {
        onClickBack() {
            if (this.leftOptions.preventGoBack) {
                this.$emit('on-click-back')
            } else {
                history.back()
            }
        }
    }
}