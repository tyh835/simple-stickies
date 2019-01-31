from rest_framework import routers
from backend.api import NoteViewSet

router = routers.DefaultRouter()
router.register('notes', NoteViewSet, 'notes')

urlpatterns = router.urls
