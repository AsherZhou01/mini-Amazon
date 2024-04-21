from django.shortcuts import render
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def update_order(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        order_id = data.get('order_id')
        address = data.get('address')

        # 打印接收到的数据
        print(f"Received order ID: {order_id}")
        print(f"Received address: {address}")

        # 处理更新订单的逻辑...

        # 返回响应
        response_data = {
            'success': True
        }
        return JsonResponse(response_data)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=400)
# Create your views here.
