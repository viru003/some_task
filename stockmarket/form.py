from django import forms
from .models import *

class stock_data(forms.ModelForm):
    class Meta:
        model = stock
        fields = ['company_name','ltp','change','buyprice','sellprice','slug']