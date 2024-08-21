const createData = (status1:string, status2:string) => [
    { status: "✔", label: 'Order Received' },
    { status: "✔", label: 'Processing' },
    { status: status1, label: 'One The Way' },
    { status: status2, label: 'Delivered' }
];

export const completedData = createData("✔", "✔");
export const inProcessData = createData("03", "04");