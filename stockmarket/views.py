from manno.settings import BASE_DIR
from django.shortcuts import render,redirect
from rest_framework.views import APIView
from django.http import HttpResponse
from .form import *
from django.contrib.auth import logout
from django.views.generic import View, TemplateView
from django.http import JsonResponse
import os

class MainView(TemplateView):
    template_name = os.path.join(BASE_DIR,'templates/main.html')


class PostJsonListView(View):
    def get(self, *args, **kwargs):
        print(kwargs)
        upper = kwargs.get('num_posts')
        lower = upper - 3 
        posts = list(stock.objects.values()[lower:upper])
        posts_size = len(stock.objects.all())
        max_size = True if upper >= posts_size else False
        return JsonResponse({'data': posts, 'max': max_size}, safe=False)


def login(request):
    if request.user.is_authenticated:
        return redirect('dashboard')
    return render(request, 'login.html')


def individual(request,slug):
    context={'data':stock.objects.get(slug=slug)}
    return render(request, 'ind.html',context)


def dashboard(request):
    if request.user.is_authenticated:
        context={'data_obj':stock.objects.all()}
        return render(request, 'dashboard.html', context)
    else:
        context={'data_obj':stock.objects.all()}
        return render(request, 'dashboard.html', context)

def signup(request):
    return render(request, 'signup.html')


def results(request):
    if request.GET['search']:
        q=request.GET['search']
        check=stock.objects.filter(company_name=q).first()
        print(q)
        if check:
            name=stock.objects.get(company_name=q)
            context={'data':name}
            return render(request,'ind.html',context)
        else:
            return HttpResponse("Please enter valid name")
    else:
            return HttpResponse('Please enter a valid input.')

def logoutview(request):
    logout(request)
    return redirect('/')