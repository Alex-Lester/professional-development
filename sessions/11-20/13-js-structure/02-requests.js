const { createApp } = Vue;

const RequestItem = {
    props: {
        text: { type: String, required: true }
    },
    emits: ['remove'],
    template: `
        <li>
            <span>{{ text }}</span>
            <button @click="$emit('remove')">Remove</button>
        </li>
    `,
}

createApp({
    components: { RequestItem },
    data() {
        return {
            guestName: 'Priya',
            nights: 3,
            // Special Requests
            requests: [],
            newRequest: '',
            // Rates
            ratePerNight: 95,
        };
    },
    methods: {
        addNight() {
            this.nights++;
        },
        addRequest() {
            const newRequest = this.newRequest.trim()
            if (newRequest !== '') {
                this.requests.push(newRequest);
            }
            this.newRequest = '';
        },
        removeRequest(index) {
            this.requests.splice(index, 1)
        }
    },
    computed: {
        totalCost() {
            return this.nights * this.ratePerNight;
        },
        requestCount() {
            return this.requests.length;
        },
        hasRequests() {
            return this.requestCount !== 0;
        },
        requestSummary() {
            return this.requestCount === 1 ? 'request' : 'requests';
        }
    },
}).mount('#app');