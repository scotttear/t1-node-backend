const retailersHtml = `
  <div class="modal-slide-in-right__ajax-content">
    <h6>Retailers Overlay Heading</h6>
    <ul class="modal-slide-in-right__retailers-list">
      <li class="modal-slide-in-right__retailers-item">
        <a href="#" class="media media--alignCenter onlineRetailer" data-retailer="Retailer Name" target="_blank" data-track='{"category": "Find retailer and Store Locator", "action": "Online Retailer", "label": "@retailer.Name" }'>
          <img class="media-img" src="//via.placeholder.com/242x84" alt="Retailer Name">
          <div class="media-body">
            <div class="btn btn-primary right">Go To Store</div>
          </div>
        </a>
      </li>
      <li class="modal-slide-in-right__retailers-item">
        <a href="#" class="media media--alignCenter onlineRetailer" data-retailer="Retailer Name" target="_blank" data-track='{"category": "Find retailer and Store Locator", "action": "Online Retailer", "label": "@retailer.Name" }'>
          <img class="media-img" src="//via.placeholder.com/242x84" alt="Retailer Name">
          <div class="media-body">
            <div class="btn btn-primary right">Go To Store</div>
          </div>
        </a>
      </li>
    </ul>
    <a href="#" class="btn btn-primary goto-store">Go To Our Store Locator</a>
  </div>
`;

const overlaysErrorHtml = '<h2>Page not found</h2>';

export { retailersHtml, overlaysErrorHtml };
