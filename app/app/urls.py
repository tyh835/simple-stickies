from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('', include('frontend.urls')),
    path('api/', include('backend.urls')),
    path('api/', include('authentication.urls'))
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

handler404 = 'frontend.views.redirect_to_spa'
handler500 = 'frontend.views.redirect_to_spa'
