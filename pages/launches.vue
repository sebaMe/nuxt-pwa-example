<template>
    <div class="launches-page content-page">
        <h1>Upcoming Launches</h1>
        <ul class="launches-list">
            <li v-for="launch in launches"
                :key="launch.flight_number"
                class="launch-item">
                <div class="header">
                    <div class="number">
                        {{ launch.flight_number }}
                    </div>
                    <div class="name">
                        {{ launch.mission_name }}
                    </div>
                </div>
                <div class="content">
                    <div class="date">
                        <div class="label">
                            Start Date
                        </div>
                        <div class="value">
                            {{ new Date(launch.launch_date_unix * 1000).toDateString() }}
                        </div>
                    </div>
                    <div class="rocket">
                        <div class="label">
                            Rocket
                        </div>
                        <div class="value">
                            {{ launch.rocket.rocket_name }}
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: "LaunchesPage",
    layout: "default",
    async asyncData({ $axios }) {
        const launches = await $axios.$get("https://api.spacexdata.com/v3/launches/upcoming");
        return { launches };
    },
    head() {
        return {
            title: "PWA Launches Page"
        };
    }
};
</script>

<style lang="scss"></style>>
