function inicializarDataTable() {
  if ($.fn.DataTable.isDataTable('#myTable')) {
    $('#myTable').DataTable().destroy();
  }

  $('#myTable').DataTable({
    responsive: true,
    autoFill: true,
    pagingType: 'simple_numbers',
    language: {
      url: '//cdn.datatables.net/plug-ins/1.13.7/i18n/pt-BR.json'
    },
    dom:
      "<'row mb-3'<'col-sm-12 col-md-6'f><'col-sm-12 col-md-6 text-end'B>>" +
      "<'row'<'col-sm-12'tr>>" +
      "<'row mt-3'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
    buttons: [
      {
        extend: 'excel',
        text: '<i class="bi bi-file-earmark-excel"></i> Excel',
        className: 'btn btn-success btn-sm'
      },
      {
        extend: 'pdf',
        text: '<i class="bi bi-file-earmark-pdf"></i> PDF',
        className: 'btn btn-danger btn-sm'
      },
      {
        extend: 'print',
        text: '<i class="bi bi-printer"></i> Imprimir',
        className: 'btn btn-secondary btn-sm'
      }
    ]
  });
}
