export const useConversionRateOptions = () => {
  return {
    tooltip: {
      trigger: "axis"
    },
    legend: {
      left: "center",
      data: ["A Software"]
    },
    grid: {
      left: "3%",
      right: "1%",
      bottom: "10%",
      top: "3%"
    },
    radar: {
      indicator: [
        { name: "Brand", max: 100 },
        { name: "Content", max: 100 },
        { name: "Usability", max: 100 },
        { name: "Function", max: 100 }
      ],
      center: ["50%", "55%"],
      radius: 100
    },
    series: [
      {
        type: "radar",
        tooltip: {
          trigger: "item"
        },
        areaStyle: {},
        data: [
          {
            value: [60, 73, 85, 40],
            name: "A Software"
          }
        ]
      }
    ]
  };
};
