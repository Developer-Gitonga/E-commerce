from django.contrib.auth.admin import UserAdmin
from django.contrib import admin
from backend.models import *
from backend.shop.models import *
from backend.cart.models import *


class UserAccountAdmin(UserAdmin):
    ordering = ['email', ]

    readonly_fields = ('last_login', 'joined')

    list_display = ('name', 'email', 'contact', 'is_vendor',
                    'is_customer', 'is_staff', 'is_superuser',)
    search_fields = ('name', 'contact', 'email')

    list_filter = [
        'is_staff', 'is_superuser', 'is_vendor', 'is_customer',
    ]

    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        (
            'Personal info',
            {
                'fields': (
                    'name',
                    'contact',
                )
            },
        ),
        (
            'Location info',
            {
                'fields': (
                    'city',
                    'address',
                    'location',
                )
            },
        ),
        (
            'Timeline',
            {
                'fields': (
                    'joined',
                    'last_login',
                )
            },
        ),
        (
            'Permissions',
            {
                'fields': (
                    'is_active',
                    'is_staff',
                    'is_vendor',
                    'is_customer',
                    'is_superuser',
                )
            },
        ),
        (
            'Advanced options',
            {
                'classes': ('collapse',),
                'fields': (
                    'groups',
                    'user_permissions',
                )
            },
        ),
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide', 'extrapretty'),
            'fields': ('name', 'email', 'contact', 'is_vendor',
                       'is_customer', 'password1', 'password2'),
        }),
    )


class CategoryAdmin(admin.ModelAdmin):
    model = Category
    list_display = ('name',)
    prepopulated_fields = {'slug': ('name',)}


class ProductAdmin(admin.ModelAdmin):
    model = Product
    list_display = ('name', 'price', 'stock', 'vendor')
    prepopulated_fields = {'slug': ('name',)}


class ReviewAdmin(admin.ModelAdmin):
    model = Review
    list_display = ('comment', 'rating')


class CartAdmin(admin.ModelAdmin):
    list_display = ['customer']


class CartItemAdmin(admin.ModelAdmin):
    list_display = ['product', 'price', 'quantity', 'cart']


admin.site.register(UserAccount, UserAccountAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Product, ProductAdmin)
admin.site.register(Review, ReviewAdmin)
admin.site.register(Cart, CartAdmin)
admin.site.register(CartItem, CartItemAdmin)
admin.site.register(Order)
