const vehicles = {
    Toyota: ["Yaris", "Corolla", "RAV4", "Hilux"],
    Chevrolet: ["Sail", "Spark", "Onix", "Tracker"],
    Hyundai: ["Grand i10", "Accent", "Tucson", "Santa Fe"],
    Kia: ["Morning", "Rio 4", "Sportage", "Seltos"],
    Nissan: ["Versa", "Sentra", "Kicks", "Navara"],
    Suzuki: ["Swift", "Baleno", "Vitara", "Jimny"],
    Chery: ["Tiggo 2"],
    Otro: ["Otro modelo"],
};

const serviceCatalog = [
    ["Mantención preventiva", 89900],
    ["Cambio de aceite y filtro", 64900],
    ["Diagnóstico electrónico", 29900],
    ["Revisión precompra", 49900],
    ["Frenos: revisión y ajuste", 39900],
    ["Alineación y balanceo", 24900],
    ["Revisión de luces", 19900],
    ["Servicio personalizado", 0],
];
const plateInput = document.getElementById("plate");

plateInput?.addEventListener("input", () => {
  const caracteres = plateInput.value
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "")
    .slice(0, 6);

  plateInput.value = [
    caracteres.slice(0, 2),
    caracteres.slice(2, 4),
    caracteres.slice(4, 6),
  ]
    .filter(Boolean)
    .join("·");
});

const $ = (id) => document.getElementById(id);

const money = (value) =>
    new Intl.NumberFormat("es-CL", {
        style: "currency",
        currency: "CLP",
        maximumFractionDigits: 0,
    }).format(value || 0);

let items = [];

const setOptions = (element, list) => {
    element.innerHTML = list
        .map((item) => `<option value="${item}">${item}</option>`)
        .join("");
};

function models() {
    setOptions($("model"), vehicles[$("brand").value]);
    preview();
}

function servicePrice() {
    const found = serviceCatalog.find(
        (service) => service[0] === $("service").value
    );

    $("price").value = found ? found[1] : "";
}

function vehicle() {
    return [$("brand").value, $("model").value]
        .filter(Boolean)
        .join(" ");
}

function preview() {
    const retiro = $("pickupAddress").value.trim();
    const same = $("sameAddress").checked;

    $("viewClient").textContent =
        $("clientName").value || "Por definir";

    $("viewContact").textContent =
        [$("clientPhone").value, $("clientEmail").value]
            .filter(Boolean)
            .join(" · ") || "—";

    $("viewVehicle").textContent =
        vehicle() || "Por definir";

    $("viewVehicleExtra").textContent = [
        $("year").value && `Año: ${$("year").value}`,
        $("plate").value && `Patente: ${$("plate").value.toUpperCase()}`,
        $("mileage").value && `Km: ${$("mileage").value}`,
        $("vin").value && `VIN: ${$("vin").value.toUpperCase()}`,
    ]
        .filter(Boolean)
        .join(" · ") || "—";

    $("viewPickup").textContent =
        retiro || "Por definir";

    $("viewDelivery").textContent = same
        ? retiro
            ? "Misma dirección de retiro"
            : "Por definir"
        : $("deliveryAddress").value.trim() || "Por definir";

    $("viewNumber").textContent =
        $("quoteNumber").value || "SIN NÚMERO";

    $("viewParts").textContent =
        $("parts").value || "Sin repuestos especificados.";

    $("viewNotes").textContent =
        $("notes").value || "Sin observaciones adicionales.";

    $("viewValidity").textContent =
        `Vigencia de la cotización: ${$("validity").value || "Por definir"
        }.`;

    $("items").innerHTML = items.length
        ? items
            .map(
                (item, index) => `
            <tr>
              <td>
                ${item.name}
                <button
                  class="remove"
                  data-index="${index}"
                  title="Quitar">
                  ×
                </button>
              </td>
              <td>${money(item.price)}</td>
            </tr>
          `
            )
            .join("")
        : `
        <tr>
          <td class="empty" colspan="2">
            Agrega servicios para comenzar.
          </td>
        </tr>
      `;

    $("total").textContent = money(
        items.reduce((sum, item) => sum + item.price, 0)
    );
}

setOptions($("brand"), Object.keys(vehicles));
models();

setOptions(
    $("service"),
    serviceCatalog.map((service) => service[0])
);

servicePrice();

document
    .querySelectorAll("input, select, textarea")
    .forEach((element) => {
        element.addEventListener("input", preview);
    });

$("brand").addEventListener("change", models);

$("service").addEventListener("change", servicePrice);

$("sameAddress").addEventListener("change", (event) => {
    $("deliveryAddressGroup").hidden = event.target.checked;
    preview();
});

$("addService").addEventListener("click", () => {
    const price = Number(
        String($("price").value).replace(/\D/g, "")
    );

    if (Number.isFinite(price)) {
        items.push({
            name: $("service").value,
            price,
        });

        preview();
    }
});

$("items").addEventListener("click", (event) => {
    if (event.target.matches(".remove")) {
        items.splice(Number(event.target.dataset.index), 1);
        preview();
    }
});

$("clear").addEventListener("click", () => {
    if (confirm("¿Limpiar todos los datos de esta cotización?")) {
        document
            .querySelectorAll(
                ".editor input:not(#quoteNumber), .editor textarea"
            )
            .forEach((element) => {
                element.value = "";
            });

        items = [];
        preview();
    }
});

$("print").addEventListener("click", () => {
    window.print();
});

$("exportCsv").addEventListener("click", () => {
    const retiro = $("pickupAddress").value.trim();

    const entrega = $("sameAddress").checked
        ? retiro
        : $("deliveryAddress").value.trim();

    const total = items.reduce(
        (sum, item) => sum + item.price,
        0
    );

    const headers = [
        "N° cotización",
        "Fecha",
        "Cliente",
        "Teléfono",
        "Correo",
        "Patente",
        "Marca",
        "Modelo",
        "Año",
        "Kilometraje",
        "VIN / N° de chasis",
        "Dirección retiro",
        "Dirección entrega",
        "Servicios",
        "Total CLP",
        "Vigencia",
        "Observaciones",
    ];

    const data = [
        $("quoteNumber").value,
        new Date().toLocaleDateString("es-CL"),
        $("clientName").value,
        $("clientPhone").value,
        $("clientEmail").value,
        $("plate").value.toUpperCase(),
        $("brand").value,
        $("model").value,
        $("year").value,
        $("mileage").value,
        $("vin").value.toUpperCase(),
        retiro,
        entrega,
        items
            .map((item) => `${item.name}: ${item.price}`)
            .join(" | "),
        total,
        $("validity").value,
        $("notes").value,
    ];

    const quoteCsv = (value) =>
        `"${String(value ?? "").replace(/"/g, '""')}"`;

    const csv = "\uFEFF" +
        [headers, data]
            .map((row) => row.map(quoteCsv).join(";"))
            .join("\n");

    const file = new Blob([csv], {
        type: "text/csv;charset=utf-8;",
    });

    const link = document.createElement("a");

    link.href = URL.createObjectURL(file);
    link.download =
        `cotizacion-${$("quoteNumber").value || "memanejo"}.csv`;

    link.click();

    URL.revokeObjectURL(link.href);
});

$("today").textContent =
    new Intl.DateTimeFormat("es-CL", {
        dateStyle: "long",
    }).format(new Date());

preview();