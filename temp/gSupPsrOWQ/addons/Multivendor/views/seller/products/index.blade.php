@extends('addon:multivendor::seller.layouts.app')

@section('content')
    @php
        $shop = auth()->user()->shop;
    @endphp

    <div class="aiz-titlebar text-left mt-2 mb-3">
        <div class="row align-items-center">
            <div class="col-md-4">
                <h1 class="h3">{{ translate('All products') }}</h1>
            </div>
            @if (seller_package_validity_check($shop->seller_package, $shop->package_invalid_at) == 'active' &&
                    $shop->products->count() < $shop->product_upload_limit)
                <div class="col-md-8 text-md-right">
                    <a href="{{ route('seller.products.create') }}" class="btn btn-primary">
                        <span>{{ translate('Add New Product') }}</span>
                    </a>
                </div>
            @endif
        </div>
    </div>

    @if (seller_package_validity_check($shop->seller_package, $shop->package_invalid_at) == 'no_package')
        <div class="alert alert-danger">
            {{ translate("You don't have any active package") }}
        </div>
    @elseif (seller_package_validity_check($shop->seller_package, $shop->package_invalid_at) == 'expired')
        <div class="alert alert-danger">
            {{ translate('Your current package') }}
            <span class="fw-600">{{ $shop->seller_package->name }}</span>
            {{ translate('has been expired at') }}
            {{ $shop->package_invalid_at }}
        </div>
    @elseif(seller_package_validity_check($shop->seller_package, $shop->package_invalid_at) == 'active' &&
            $shop->products->count() >= $shop->product_upload_limit)
        <div class="alert alert-danger">
            {{ translate("You've reached your maximum product upload limit") }}
            <span class="fw-600">{{ $shop->product_upload_limit }}</span>
        </div>
    @else
        <div class="alert alert-info">
            {{ translate('Your remaining product upload limit') }}
            <span
                class="fw-600">{{ $shop->product_upload_limit - $shop->products->count() }}/{{ $shop->product_upload_limit }}</span>
        </div>
    @endif

    <div class="card">
        <form class="" id="sort_products" action="" method="GET">
            <div class="card-header row gutters-5">
                <div class="col text-center text-md-left">
                    <h5 class="mb-md-0 h6">{{ translate('All Products') }}</h5>
                </div>

                <div class="dropdown mb-2 mb-md-0">
                    <button class="btn border dropdown-toggle" type="button" data-toggle="dropdown">
                        {{ translate('Bulk Action') }}
                    </button>
                    <div class="dropdown-menu dropdown-menu-right">
                        <a class="dropdown-item confirm-alert" href="javascript:void(0)" data-target="#bulk-delete-modal">
                            {{ translate('Delete selection') }}</a>
                    </div>
                </div>

                <div class="col-md-2 ml-auto">
                    <select class="form-control form-control-sm aiz-selectpicker mb-2 mb-md-0" name="type" id="type"
                        onchange="sort_products()">
                        <option value="">{{ translate('Sort By') }}</option>
                        <option value="rating,desc"
                            @isset($col_name, $query) @if ($col_name == 'rating' && $query == 'desc') selected @endif @endisset>
                            {{ translate('Rating (High > Low)') }}</option>
                        <option value="rating,asc"
                            @isset($col_name, $query) @if ($col_name == 'rating' && $query == 'asc') selected @endif @endisset>
                            {{ translate('Rating (Low > High)') }}</option>
                        <option value="num_of_sale,desc"
                            @isset($col_name, $query) @if ($col_name == 'num_of_sale' && $query == 'desc') selected @endif @endisset>
                            {{ translate('Num of Sale (High > Low)') }}</option>
                        <option value="num_of_sale,asc"
                            @isset($col_name, $query) @if ($col_name == 'num_of_sale' && $query == 'asc') selected @endif @endisset>
                            {{ translate('Num of Sale (Low > High)') }}</option>
                        <option value="unit_price,desc"
                            @isset($col_name, $query) @if ($col_name == 'unit_price' && $query == 'desc') selected @endif @endisset>
                            {{ translate('Base Price (High > Low)') }}</option>
                        <option value="unit_price,asc"
                            @isset($col_name, $query) @if ($col_name == 'unit_price' && $query == 'asc') selected @endif @endisset>
                            {{ translate('Base Price (Low > High)') }}</option>
                    </select>
                </div>
                <div class="col-md-2">
                    <div class="input-group">
                        <input type="text" class="form-control form-control-sm" id="search" name="search"
                            @isset($sort_search) value="{{ $sort_search }}" @endisset
                            placeholder="{{ translate('Type & Enter') }}">
                    </div>
                </div>
            </div>
            <div class="card-body">
                <table class="table aiz-table mb-0">
                    <thead>
                        <tr>
                            <th>
                                <div class="form-group">
                                    <div class="aiz-checkbox-inline">
                                        <label class="aiz-checkbox">
                                            <input type="checkbox" class="check-all">
                                            <span class="aiz-square-check"></span>
                                        </label>
                                    </div>
                                </div>
                            </th>
                            <th class="col-xl-2">{{ translate('Name') }}</th>
                            <th data-breakpoints="md">{{ translate('Info') }}</th>
                            <th data-breakpoints="md">{{ translate('Current Stock ') }}</th>
                            <th data-breakpoints="md" width="20%">{{ translate('Categories') }}</th>
                            <th data-breakpoints="md">{{ translate('Brand') }}</th>
                            @if (get_setting('product_approve_by_admin') == 1)
                                <th data-breakpoints="md">{{ translate('Approval') }}</th>
                            @endif
                            <th data-breakpoints="md">{{ translate('Published') }}</th>
                            <th data-breakpoints="md" class="text-right">{{ translate('Options') }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($products as $key => $product)
                            <tr>
                                <td>
                                    <div class="form-group d-inline-block">
                                        <label class="aiz-checkbox">
                                            <input type="checkbox" class="check-one" name="id[]"
                                                value="{{ $product->id }}">
                                            <span class="aiz-square-check"></span>
                                        </label>
                                    </div>
                                </td>
                                <td>
                                    <a href="{{ route('product', $product->slug) }}" target="_blank"
                                        class="text-reset d-block">
                                        <div class="d-flex align-items-center">
                                            <img src="{{ uploaded_asset($product->thumbnail_img) }}" alt="Image"
                                                class="size-60px size-xxl-80px mr-2"
                                                onerror="this.onerror=null;this.src='{{ static_asset('/assets/img/placeholder.jpg') }}';" />
                                            <span class="flex-grow-1 minw-0">
                                                <div class=" text-truncate-2 fs-12">
                                                    {{ $product->getTranslation('name') }}</div>
                                            </span>
                                        </div>
                                    </a>
                                </td>
                                <td>
                                    <div>
                                        <div><span>{{ translate('Rating') }}</span>: <span
                                                class="rating rating-sm my-2">{{ renderStarRating($product->rating) }}</span>
                                        </div>
                                        <div><span>{{ translate('Toal Sold') }}</span>: <span
                                                class="fw-600">{{ $product->num_of_sale }}</span></div>
                                        <div>
                                            <span>{{ translate('Price') }}</span>:
                                            @if ($product->highest_price != $product->lowest_price)
                                                <span class="fw-600">{{ format_price($product->lowest_price) }} -
                                                    {{ format_price($product->highest_price) }}</span>
                                            @else
                                                <span class="fw-600">{{ format_price($product->lowest_price) }}</span>
                                            @endif
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <div>
                                            @foreach($product->variations as $variation)
                                            @if(count($variation->combinations) == 0)
                                            <span class="ml-2 font-weight-bold">{{ $variation->stock ==1 ? translate('In Stock') : translate('Out of Stock') }}</span>
                                            @else
                                                <div class="d-flex">
                                                    <div >
                                                        @foreach($variation->combinations as $combination)
                                                            <span> {{ optional($combination->attribute_value)->name .' '  }} </span>
                                                        @endforeach
                                                    </div>
                                                    <div>
                                                         <span class="ml-2 font-weight-bold">- {{ $variation->current_stock ?? ($variation->stock ==1 ? translate('In Stock') : translate('Out of Stock'))}}</span>
                                                    </div>
                                                </div>
                                                @endif
                                            @endforeach
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    @foreach ($product->categories as $category)
                                        <span
                                            class="badge badge-inline badge-md bg-soft-dark mb-1">{{ $category->getTranslation('name') }}</span>
                                    @endforeach
                                </td>
                                <td>
                                    @if ($product->brand)
                                        <div class="h-50px w-100px d-flex align-items-center justify-content-center">
                                            <img src="{{ uploaded_asset($product->brand->logo) }}"
                                                alt="{{ translate('Brand') }}" class="mw-100 mh-100"
                                                onerror="this.onerror=null;this.src='{{ static_asset('/assets/img/placeholder.jpg') }}';" />
                                        </div>
                                    @else
                                        <span>{{ translate('No brand') }}</span>
                                    @endif
                                </td>
                                @if (get_setting('product_approve_by_admin') == 1)
                                    <td>
                                        @if ($product->approved == 1)
                                            <span
                                                class="badge badge-inline badge-success">{{ translate('Approved') }}</span>
                                        @else
                                            <span class="badge badge-inline badge-info">{{ translate('Pending') }}</span>
                                        @endif
                                    </td>
                                @endif
                                <td>
                                    <label class="aiz-switch aiz-switch-success mb-0">
                                        <input onchange="update_published(this)" value="{{ $product->id }}"
                                            type="checkbox" @if ($product->published == 1) checked @endif>
                                        <span class="slider round"></span>
                                    </label>
                                </td>
                                <td class="text-right">
                                    <a class="btn btn-soft-primary btn-icon btn-circle btn-sm"
                                        href="{{ route('seller.product.show', $product->id) }}"
                                        title="{{ translate('View') }}">
                                        <i class="las la-eye"></i>
                                    </a>
                                    <a class="btn btn-soft-info btn-icon btn-circle btn-sm"
                                        href="{{ route('seller.products.edit', ['id' => $product->id, 'lang' => env('DEFAULT_LANGUAGE')]) }}"
                                        title="{{ translate('Edit') }}">
                                        <i class="las la-edit"></i>
                                    </a>
                                    <a class="btn btn-soft-success btn-icon btn-circle btn-sm"
                                        href="{{ route('seller.product.duplicate', ['id' => $product->id]) }}"
                                        title="{{ translate('Duplicate') }}">
                                        <i class="las la-copy"></i>
                                    </a>
                                    <a href="#"
                                        class="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
                                        data-href="{{ route('seller.product.destroy', $product->id) }}"
                                        title="{{ translate('Delete') }}">
                                        <i class="las la-trash"></i>
                                    </a>
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
                <div class="aiz-pagination">
                    {{ $products->appends(request()->input())->links() }}
                </div>
            </div>
        </form>

    </div>
@endsection

@section('modal')
    <!-- Delete Modal -->
    @include('backend.inc.delete_modal')
    <!-- Bulk Delete modal -->
    @include('modals.bulk_delete_modal')
@endsection

@section('script')
    <script type="text/javascript">
        //select all items or bulk delete
        $(document).on("change", ".check-all", function() {
            if (this.checked) {
                // Iterate each checkbox
                $('.check-one:checkbox').each(function() {
                    this.checked = true;
                });
            } else {
                $('.check-one:checkbox').each(function() {
                    this.checked = false;
                });
            }

        });

        function bulk_delete() {
            var data = new FormData($('#sort_products')[0]);
            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                url: "{{ route('seller.bulk-product-delete') }}",
                type: 'POST',
                data: data,
                cache: false,
                contentType: false,
                processData: false,
                success: function(response) {
                    if (response == 1) {
                        location.reload();
                    }
                }
            });
        }
        //end of bulk delete

        $(document).ready(function() {
            //$('#container').removeClass('mainnav-lg').addClass('mainnav-sm');
        });

        function update_published(el) {
            if (el.checked) {
                var status = 1;
            } else {
                var status = 0;
            }
            $.post('{{ route('seller.product.published') }}', {
                _token: '{{ csrf_token() }}',
                id: el.value,
                status: status
            }, function(data) {
                if (data.success) {
                    AIZ.plugins.notify('success', data.message);
                } else {
                    AIZ.plugins.notify('danger', data.message);

                    if (status == 1) {
                        $(el).prop('checked', false);
                    } else {
                        $(el).prop('checked', true);
                    }
                }
            });
        }

        function sort_products(el) {
            $('#sort_products').submit();
        }
    </script>
@endsection
