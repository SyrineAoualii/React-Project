import React, { useState, useEffect } from 'react';


 
function Checkout() {
    const [cartItems, setCartItems] = useState([]);
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const taxRate = 0.20; // Taux de taxe de 20%
    const tax = subtotal * taxRate; // Calculez la taxe basée sur le sous-total
    const total = subtotal + tax; // Total final incluant les taxes
    useEffect(() => {
      const items = JSON.parse(localStorage.getItem('cart')) || [];
      setCartItems(items);
    }, []);
  
    const updateQuantity = (index, delta) => {
      const newCartItems = [...cartItems];
      const item = newCartItems[index];
      const newQuantity = item.quantity + delta;

    
      if (newQuantity > 0) {
        item.quantity = newQuantity;
      } else {
        newCartItems.splice(index, 1); 
      }
  
      setCartItems(newCartItems);
      localStorage.setItem('cart', JSON.stringify(newCartItems));
    };
  
    const removeItem = (index) => {
      const newCartItems = [...cartItems];
      newCartItems.splice(index, 1);
  
      setCartItems(newCartItems);
      localStorage.setItem('cart', JSON.stringify(newCartItems));
    };

  return (
    <div>
              <div className="site-branding-area">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="logo" style={{ width: '100px', height: '100px' }}>
                <h1><a href="/"><img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="Logo" /></a></h1>
              </div>
            </div>
            <div className="col-sm-8">
              <div className="shopping-item">
                Cart: <span className="cart-amunt">{cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)} €</span>
                <i className="fa fa-shopping-cart"></i>
                <span className="product-count">{cartItems.reduce((acc, item) => acc + item.quantity, 0)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="product-big-title-area">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="product-bit-title text-center">
                        <h2>Checkout</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="single-product-area">
        <div class="zigzag-bottom"></div>
        <div class="container">
            <div class="row">

                
                <div class="col-md-12">
                    <div class="product-content-right">
                        <div class="woocommerce">
                       

                            <form enctype="multipart/form-data" action="#" class="checkout" method="post" name="checkout">

                                <div id="customer_details" class="col2-set">
                                    <div class="col-6">
                                        <div class="woocommerce-billing-fields">
                                            <h3>Billing Details</h3>
                                            <p id="billing_country_field" class="form-row form-row-wide address-field update_totals_on_change validate-required woocommerce-validated">
                                                <label class="" for="billing_country">Civility <abbr title="required" class="required">*</abbr>
                                                </label>
												        <select class="country_to_state country_select" id="shipping_country" name="shipping_country">
                                      
                                                        <option value="AX">Mr</option>
                                                        <option value="AF">Mlle</option>
                                            <option value="AF">Mme</option>
											</select>
                                            </p>

                                            <p id="billing_first_name_field" class="form-row form-row-first validate-required">
                                                <label class="" for="billing_first_name">First Name <abbr title="required" class="required">*</abbr>
                                                </label>
                                                <input type="text" value="" placeholder="" id="billing_first_name" name="billing_first_name" class="input-text "/>
                                            </p>

                                            <p id="billing_last_name_field" class="form-row form-row-last validate-required">
                                                <label class="" for="billing_last_name">Last Name <abbr title="required" class="required">*</abbr>
                                                </label>
                                                <input type="text" value="" placeholder="" id="billing_last_name" name="billing_last_name" class="input-text "/>
                                            </p>
                                            <div class="clear"></div>

                                            <p id="billing_company_field" class="form-row form-row-wide">
                                                <label class="" for="billing_company">Company Name</label>
                                                <input type="text" value="" placeholder="" id="billing_company" name="billing_company" class="input-text "/>
                                            </p>

                                            <p id="billing_address_1_field" class="form-row form-row-wide address-field validate-required">
                                                <label class="" for="billing_address_1">Address <abbr title="required" class="required">*</abbr>
                                                </label>
                                                <input type="text" value="" placeholder="Street address" id="billing_address_1" name="billing_address_1" class="input-text "/>
                                            </p>

                                            <p id="billing_address_2_field" class="form-row form-row-wide address-field">
                                                <input type="text" value="" placeholder="Apartment, suite, unit etc. (optional)" id="billing_address_2" name="billing_address_2" class="input-text "/>
                                            </p>

                                            <p id="billing_city_field" class="form-row form-row-wide address-field validate-required" data-o_class="form-row form-row-wide address-field validate-required">
                                                <label class="" for="billing_city">Town / City <abbr title="required" class="required">*</abbr>
                                                </label>
                                                <input type="text" value="" placeholder="Town / City" id="billing_city" name="billing_city" class="input-text "/>
                                            </p>

                                            <p id="billing_state_field" class="form-row form-row-first address-field validate-state" data-o_class="form-row form-row-first address-field validate-state">
                                                <label class="" for="billing_state">County</label>
                                                <input type="text" id="billing_state" name="billing_state" placeholder="State / County" value="" class="input-text "/>
                                            </p>
                                            <p id="billing_postcode_field" class="form-row form-row-last address-field validate-required validate-postcode" data-o_class="form-row form-row-last address-field validate-required validate-postcode">
                                                <label class="" for="billing_postcode">Postcode <abbr title="required" class="required">*</abbr>
                                                </label>
                                                <input type="text" value="" placeholder="Postcode / Zip" id="billing_postcode" name="billing_postcode" class="input-text "/>
                                            </p>

                                            <div class="clear"></div>

                                            <p id="billing_email_field" class="form-row form-row-first validate-required validate-email">
                                                <label class="" for="billing_email">Email Address <abbr title="required" class="required">*</abbr>
                                                </label>
                                                <input type="text" value="" placeholder="" id="billing_email" name="billing_email" class="input-text "/>
                                            </p>

                                            <p id="billing_phone_field" class="form-row form-row-last validate-required validate-phone">
                                                <label class="" for="billing_phone">Phone <abbr title="required" class="required">*</abbr>
                                                </label>
                                                <input type="text" value="" placeholder="" id="billing_phone" name="billing_phone" class="input-text "/>
                                            </p>
                                            <div class="clear"></div>


          

                                        </div>
                                    </div>

                                    <div class="col-6">
                                        <div class="woocommerce-shipping-fields">
                                            <h3 id="ship-to-different-address">
                        <label class="checkbox" for="ship-to-different-address-checkbox">Ship to a different address?</label>
                        <input type="checkbox" value="1" name="ship_to_different_address" checked="checked" class="input-checkbox" id="ship-to-different-address-checkbox"/>
                        </h3>
                        <div className="shipping_address" style={{ display: 'block' }}>

                                                <p id="shipping_country_field" class="form-row form-row-wide address-field update_totals_on_change validate-required woocommerce-validated">
                                                    <label class="" for="shipping_country">Civility <abbr title="required" class="required">*</abbr>
                                                    </label>
                                                    <select class="country_to_state country_select" id="shipping_country" name="shipping_country">
                                      
                                                        <option value="AX">Mr</option>
                                                        <option value="AF">Mlle</option>
                                            <option value="AF">Mme</option>
											</select>
                                                </p>

                                                <p id="shipping_first_name_field" class="form-row form-row-first validate-required">
                                                    <label class="" for="shipping_first_name">First Name <abbr title="required" class="required">*</abbr>
                                                    </label>
                                                    <input type="text" value="" placeholder="" id="shipping_first_name" name="shipping_first_name" class="input-text "/>
                                                </p>

                                                <p id="shipping_last_name_field" class="form-row form-row-last validate-required">
                                                    <label class="" for="shipping_last_name">Last Name <abbr title="required" class="required">*</abbr>
                                                    </label>
                                                    <input type="text" value="" placeholder="" id="shipping_last_name" name="shipping_last_name" class="input-text "/>
                                                </p>
                                                <div class="clear"></div>

                                                <p id="shipping_company_field" class="form-row form-row-wide">
                                                    <label class="" for="shipping_company">Company Name</label>
                                                    <input type="text" value="" placeholder="" id="shipping_company" name="shipping_company" class="input-text "/>
                                                </p>

                                                <p id="shipping_address_1_field" class="form-row form-row-wide address-field validate-required">
                                                    <label class="" for="shipping_address_1">Address <abbr title="required" class="required">*</abbr>
                                                    </label>
                                                    <input type="text" value="" placeholder="Street address" id="shipping_address_1" name="shipping_address_1" class="input-text "/>
                                                </p>

                                                <p id="shipping_address_2_field" class="form-row form-row-wide address-field">
                                                    <input type="text" value="" placeholder="Apartment, suite, unit etc. (optional)" id="shipping_address_2" name="shipping_address_2" class="input-text "/>
                                                </p>

                                                <p id="shipping_city_field" class="form-row form-row-wide address-field validate-required" data-o_class="form-row form-row-wide address-field validate-required">
                                                    <label class="" for="shipping_city">Town / City <abbr title="required" class="required">*</abbr>
                                                    </label>
                                                    <input type="text" value="" placeholder="Town / City" id="shipping_city" name="shipping_city" class="input-text "/>
                                                </p>

                                                <p id="shipping_state_field" class="form-row form-row-first address-field validate-state" data-o_class="form-row form-row-first address-field validate-state">
                                                    <label class="" for="shipping_state">County</label>
                                                    <input type="text" id="shipping_state" name="shipping_state" placeholder="State / County" value="" class="input-text "/>
                                                </p>
                                                <p id="shipping_postcode_field" class="form-row form-row-last address-field validate-required validate-postcode" data-o_class="form-row form-row-last address-field validate-required validate-postcode">
                                                    <label class="" for="shipping_postcode">Postcode <abbr title="required" class="required">*</abbr>
                                                    </label>
                                                    <input type="text" value="" placeholder="Postcode / Zip" id="shipping_postcode" name="shipping_postcode" class="input-text "/>
                                                </p>

                                                <div class="clear"></div>


                                            </div>





                                            <p id="order_comments_field" class="form-row notes">
                                                <label class="" for="order_comments">Order Notes</label>
                                                <textarea cols="5" rows="2" placeholder="Notes about your order, e.g. special notes for delivery." id="order_comments" class="input-text " name="order_comments"></textarea>
                                            </p>


                                        </div>

                                    </div>

                                </div>

                                <h3 id="order_review_heading">Your order</h3>

                                <div id="order_review" style={{ position: 'relative' }}>

                                <table className="shop_table">
          <thead>
            <tr>
              <th className="product-name">Product</th>
              <th className="product-total">Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr className="cart_item" key={index}>
                <td className="product-name">
                  {item.name} <strong className="product-quantity">× {item.quantity}</strong>
                </td>
                <td className="product-total">
                  <span className="amount">£{(item.price * item.quantity).toFixed(2)}</span>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="cart-subtotal">
              <th>Cart Subtotal</th>
              <td><span className="amount">£{subtotal.toFixed(2)}</span></td>
            </tr>
            <tr className="shipping">
              <th>Taxe (20%)</th>
              <td>{tax.toFixed(2)} €</td>
            </tr>
            <tr className="order-total">
              <th>Order Total</th>
              <td><strong><span className="amount">£{total.toFixed(2)}</span></strong></td>
            </tr>
          </tfoot>
        </table>
                                    <div id="payment">
                                        <ul class="payment_methods methods">
                                            <li class="payment_method_bacs">
                                                <input type="radio" data-order_button_text="" checked="checked" value="bacs" name="payment_method" class="input-radio" id="payment_method_bacs"/>
                                                <label for="payment_method_bacs">Direct Bank Transfer </label>
                                                <div class="payment_box payment_method_bacs">
                                                    <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                                                </div>
                                            </li>
                                            <li class="payment_method_cheque">
                                                <input type="radio" data-order_button_text="" value="cheque" name="payment_method" class="input-radio" id="payment_method_cheque"/>
                                                <label for="payment_method_cheque">Cheque Payment </label>
                                                <div style={{ display: 'none' }} className="payment_box payment_method_cheque">
``

                                                    <p>Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                                </div>
                                            </li>
                                            <li class="payment_method_paypal">
                                                <input type="radio" data-order_button_text="Proceed to PayPal" value="paypal" name="payment_method" class="input-radio" id="payment_method_paypal"/>
                                                <label htmlFor="payment_method_paypal">PayPal <img alt="PayPal Acceptance Mark" src="https://www.paypalobjects.com/webstatic/mktg/Logo/AM_mc_vs_ms_ae_UK.png"/><a title="What is PayPal?" onClick={() => window.open('https://www.paypal.com/gb/webapps/mpp/paypal-popup', 'WIPaypal', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=1060, height=700')} className="about_paypal" href="https://www.paypal.com/gb/webapps/mpp/paypal-popup">What is PayPal?</a></label>

                                                <div style={{ display: 'none' }} className="payment_box payment_method_paypal">

                                                    <p>Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.</p>
                                                </div>
                                            </li>
                                        </ul>

                                        <div class="form-row place-order">

                                            <input type="button" data-value="Place order" value="Place order" id="place_order" name="woocommerce_checkout_place_order" class="button alt"/>


                                        </div>

                                        <div class="clear"></div>

                                    </div>
                                </div>
                            </form>

                        </div>                       
                    </div>                    
                </div>
            </div>
        </div>
    </div>
    </div>


  )
}

export default Checkout
