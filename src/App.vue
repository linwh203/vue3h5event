<template>
  <router-view></router-view>
  <!-- echart demo -->
  <!-- <div id="main" style="width: 800px; height: 600px"></div> -->
</template>

<script setup>
/*
import * as echarts from "echarts";
import "echarts-gl";
// import "./assets/js/world";
import worldMap from "./assets/world";
import airLineData from "./assets/flights.json";

onMounted(() => {
  echarts.registerMap("world", worldMap);
  const myChart = echarts.init(document.getElementById("main"));

  const airports = airLineData.airports.map(function (item) {
    return {
      coord: [item[3], item[4]],
    };
  });

  function getAirportCoord(idx) {
    return [airLineData.airports[idx][3], airLineData.airports[idx][4]];
  }
  let routes = airLineData.routes.map(function (airline) {
    return [getAirportCoord(airline[1]), getAirportCoord(airline[2])];
  });
  const routesGroupByAirline = {};
  airLineData.routes.forEach(function (route) {
    var airline = airLineData.airlines[route[0]];
    var airlineName = airline[0];
    if (!routesGroupByAirline[airlineName]) {
      routesGroupByAirline[airlineName] = [];
    }
    routesGroupByAirline[airlineName].push(route);
  });

  // airLineData.routes.forEach(function (airline) {
  //   pointsData.push(getAirportCoord(airline[1]));
  //   pointsData.push(getAirportCoord(airline[2]));
  // });

  let series = airLineData.airlines
    .map(function (airline) {
      var airlineName = airline[0];
      var routes = routesGroupByAirline[airlineName];

      if (!routes) {
        return null;
      }
      return {
        type: "lines3D",
        name: airlineName,

        effect: {
          show: true,
          trailWidth: 2,
          trailLength: 0.15,
          trailOpacity: 1,
          trailColor: "rgb(30, 30, 60)",
        },

        lineStyle: {
          width: 1,
          color: "rgb(50, 50, 150)",
          // color: 'rgb(118, 233, 241)',
          opacity: 0.1,
        },
        blendMode: "lighter",

        data: routes.map(function (item) {
          return [airports[item[1]].coord, airports[item[2]].coord];
        }),
      };
    })
    .filter(function (series) {
      return !!series;
    });
  myChart.setOption({
    geo3D: {
      map: "world",
      shading: "realistic",
      silent: true,
      environment: "#333",
      realisticMaterial: {
        roughness: 0.8,
        metalness: 0,
      },
      postEffect: {
        enable: true,
      },
      groundPlane: {
        show: false,
      },
      light: {
        main: {
          intensity: 1,
          alpha: 30,
        },
        ambient: {
          intensity: 0,
        },
      },
      viewControl: {
        distance: 70,
        alpha: 89,

        panMouseButton: "left",
        rotateMouseButton: "right",
      },

      itemStyle: {
        color: "#000",
      },

      regionHeight: 0.5,
    },
    series: series,
    // series: [
    //   {
    //     type: "lines3D",

    //     coordinateSystem: "geo3D",

    //     effect: {
    //       show: true,
    //       trailWidth: 1,
    //       trailOpacity: 0.5,
    //       trailLength: 0.2,
    //       constantSpeed: 2,
    //     },

    //     blendMode: "lighter",

    //     lineStyle: {
    //       width: 0.2,
    //       opacity: 0.05,
    //     },

    //     data: routes,
    //   },
    // ],
  });

  window.addEventListener("keydown", function () {
    myChart.dispatchAction({
      type: "lines3DToggleEffect",
      seriesIndex: 0,
    });
  });
});
*/

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style lang="less">
body {
  // position: fixed;
}
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
}
</style>
