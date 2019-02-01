from django.test import TestCase, Client


class FrontendTest(TestCase):
    def test_index(self):
        client = Client()
        response = client.get('/')
        self.assertEquals(response.status_code, 200)
