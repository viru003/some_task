from django.db import models
from django.contrib.auth.models import User
from .helper import *

# Create your models here.
class stock(models.Model):
    company_name=models.CharField(max_length=30)
    ltp=models.FloatField()
    change=models.FloatField()
    buyprice=models.FloatField()
    sellprice=models.FloatField()
    slug=models.SlugField(max_length=1000, null=True, blank=True)

    def __str__(self):
        return self.company_name
    
    def save(self, *args, **kwargs):
        self.slug=generate_slug(self.company_name)
        super(stock,self).save(*args, **kwargs)

    class Meta:
        ordering = ('-company_name',)

    def __unicode__(self):
          return self.company_name
