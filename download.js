fetch('http://api-alpha.heywoof.com/order/waybills/v2/shipping-report', {
    method: "POST",
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        "header": {"authToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NjYyMDA1NjQsInVzZXJJZCI6IjI4ODk4ODM3MDM1OTU0OTk1MiIsImNoYW5uZWxJZCI6MTF9.QE24ZiwMn3NbpH6M6g_6WV2WLQcDdohnaYcJyuJ6_nI"},
        "data": {}
    })
}).then(function(response) {
    return response.blob();
}).then(function(blob) {
    let url = window.URL.createObjectURL(blob);

    let a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    a.href = url;
    a.download = "发货报表.xlsx";
    a.click();
    window.URL.revokeObjectURL(url);
});