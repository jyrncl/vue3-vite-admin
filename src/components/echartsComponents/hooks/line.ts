// import { computed } from "vue";
import { UseEChartsOption } from "@/types";

export const useTrafficLineOptions: UseEChartsOption = (data, props) => {
  return {
    tooltip: {
      trigger: "axis"
    },
    xAxis: {
      type: "category",
      data: data.map(item => item[props.label])
    },
    yAxis: {
      type: "value"
    },
    grid: {
      left: "3%",
      right: "1%",
      bottom: "10%",
      top: "3%"
    },
    series: [
      {
        type: "line",
        smooth: true,
        data: data.map(item => ({
          name: item[props.label],
          value: item[props.value]
        })),
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          }
        }
      }
    ]
  };
};
