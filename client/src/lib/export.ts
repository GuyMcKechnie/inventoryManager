export const exportToCSV = (data: any[]) => {
  try {
    let csvData = "data:text/csv;charset=utf-8,";
    const headers = Object.keys(data[0]).join(",") + "\n";
    csvData += headers;
    data.forEach((row) => {
      const values = Object.values(row).join(",") + "\n";
      csvData += values;
    });
    const encodedURI = encodeURI(csvData);
    window.open(encodedURI);
    console.log("CSV export successful");
  } catch (error) {
    console.error("Error exporting to CSV:", error);
    return null;
  }
};
