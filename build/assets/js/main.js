$(document).ready(function(){$("#pagepiling").pagepiling({direction:"horisontal",verticalCentered:!0,sectionsColor:[],anchors:["firstPage","secondPage","thirdPage","fourthPage"],menu:"#nav-mobile",scrollingSpeed:1600,easing:"swing",loopBottom:!0,loopTop:!0,css3:!0,navigation:{textColor:"blue",bulletsColor:"#2196F3",position:"right",tooltips:["Главная","Работы","Цена","Заказать"]},normalScrollElements:null,normalScrollElementTouchThreshold:5,touchSensitivity:5,keyboardScrolling:!0,sectionSelector:".section",animateAnchor:!1,onLeave:function(o,e,t){},afterLoad:function(o,e){},afterRender:function(){}}),$(".section1").vide({mp4:"../assets/bg.mp4",poster:"../assets/img/face.jpg"},{volume:1,playbackRate:1,muted:!0,loop:!0,autoplay:!0,position:"0% 0%",resizing:!0,bgColor:"#00000",className:"video1"}),$(".sound").click(function(o){o.preventDefault(),$(".sound i").hasClass("fa-volume-off")?($(".video1 video").prop("muted",!1),$(".sound i").attr("class","fa fa-volume-up"),Materialize.toast("Звук включен",4e3)):($(".video1 video").prop("muted",!0),$(".sound i").attr("class","fa fa-volume-off"),Materialize.toast("Звук выключен",4e3))}),$(".button-collapse").sideNav()});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJwYWdlcGlsaW5nIiwiZGlyZWN0aW9uIiwidmVydGljYWxDZW50ZXJlZCIsInNlY3Rpb25zQ29sb3IiLCJhbmNob3JzIiwibWVudSIsInNjcm9sbGluZ1NwZWVkIiwiZWFzaW5nIiwibG9vcEJvdHRvbSIsImxvb3BUb3AiLCJjc3MzIiwibmF2aWdhdGlvbiIsInRleHRDb2xvciIsImJ1bGxldHNDb2xvciIsInBvc2l0aW9uIiwidG9vbHRpcHMiLCJub3JtYWxTY3JvbGxFbGVtZW50cyIsIm5vcm1hbFNjcm9sbEVsZW1lbnRUb3VjaFRocmVzaG9sZCIsInRvdWNoU2Vuc2l0aXZpdHkiLCJrZXlib2FyZFNjcm9sbGluZyIsInNlY3Rpb25TZWxlY3RvciIsImFuaW1hdGVBbmNob3IiLCJvbkxlYXZlIiwiaW5kZXgiLCJuZXh0SW5kZXgiLCJhZnRlckxvYWQiLCJhbmNob3JMaW5rIiwiYWZ0ZXJSZW5kZXIiLCJ2aWRlIiwibXA0IiwicG9zdGVyIiwidm9sdW1lIiwicGxheWJhY2tSYXRlIiwibXV0ZWQiLCJsb29wIiwiYXV0b3BsYXkiLCJyZXNpemluZyIsImJnQ29sb3IiLCJjbGFzc05hbWUiLCJjbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhhc0NsYXNzIiwicHJvcCIsImF0dHIiLCJNYXRlcmlhbGl6ZSIsInRvYXN0Iiwic2lkZU5hdiJdLCJtYXBwaW5ncyI6IkFBQUFBLEVBQUVDLFVBQVVDLE1BQU0sV0FDZEYsRUFBRSxlQUFlRyxZQUNiQyxVQUFXLGFBQ1hDLGtCQUFrQixFQUNsQkMsaUJBQ0FDLFNBQVUsWUFBYSxhQUFjLFlBQWEsY0FDbERDLEtBQU0sY0FDTkMsZUFBZ0IsS0FDaEJDLE9BQVEsUUFDUkMsWUFBWSxFQUNaQyxTQUFTLEVBQ1RDLE1BQU0sRUFDTkMsWUFDSUMsVUFBYSxPQUNiQyxhQUFnQixVQUNoQkMsU0FBWSxRQUNaQyxVQUFhLFVBQVcsU0FBVSxPQUFRLGFBRTlDQyxxQkFBc0IsS0FDdEJDLGtDQUFtQyxFQUNuQ0MsaUJBQWtCLEVBQ2xCQyxtQkFBbUIsRUFDbkJDLGdCQUFpQixXQUNqQkMsZUFBZSxFQUdmQyxRQUFTLFNBQVNDLEVBQU9DLEVBQVd2QixLQUNwQ3dCLFVBQVcsU0FBU0MsRUFBWUgsS0FDaENJLFlBQWEsZUFFakI5QixFQUFFLGFBQWErQixNQUNYQyxJQUFLLG1CQUNMQyxPQUFRLDJCQUVSQyxPQUFRLEVBQ1JDLGFBQWMsRUFDZEMsT0FBTyxFQUNQQyxNQUFNLEVBQ05DLFVBQVUsRUFDVnJCLFNBQVUsUUFFVnNCLFVBQVUsRUFDVkMsUUFBUyxTQUNUQyxVQUFXLFdBRWZ6QyxFQUFFLFVBQVUwQyxNQUFNLFNBQVNDLEdBQ3ZCQSxFQUFFQyxpQkFDRTVDLEVBQUUsWUFBWTZDLFNBQVMsa0JBQ3ZCN0MsRUFBRSxpQkFBaUI4QyxLQUFLLFNBQVMsR0FDakM5QyxFQUFFLFlBQVkrQyxLQUFLLFFBQVMsbUJBQzVCQyxZQUFZQyxNQUFNLGVBQWdCLE9BRWxDakQsRUFBRSxpQkFBaUI4QyxLQUFLLFNBQVMsR0FDakM5QyxFQUFFLFlBQVkrQyxLQUFLLFFBQVMsb0JBQzVCQyxZQUFZQyxNQUFNLGdCQUFpQixRQUczQ2pELEVBQUUsb0JBQW9Ca0QiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICQoJyNwYWdlcGlsaW5nJykucGFnZXBpbGluZyh7XG4gICAgICAgIGRpcmVjdGlvbjogJ2hvcmlzb250YWwnLFxuICAgICAgICB2ZXJ0aWNhbENlbnRlcmVkOiB0cnVlLFxuICAgICAgICBzZWN0aW9uc0NvbG9yOiBbXSxcbiAgICAgICAgYW5jaG9yczogWydmaXJzdFBhZ2UnLCAnc2Vjb25kUGFnZScsICd0aGlyZFBhZ2UnLCAnZm91cnRoUGFnZSddLFxuICAgICAgICBtZW51OiAnI25hdi1tb2JpbGUnLFxuICAgICAgICBzY3JvbGxpbmdTcGVlZDogMTYwMCxcbiAgICAgICAgZWFzaW5nOiAnc3dpbmcnLFxuICAgICAgICBsb29wQm90dG9tOiB0cnVlLFxuICAgICAgICBsb29wVG9wOiB0cnVlLFxuICAgICAgICBjc3MzOiB0cnVlLFxuICAgICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgICAgICAndGV4dENvbG9yJzogJ2JsdWUnLFxuICAgICAgICAgICAgJ2J1bGxldHNDb2xvcic6ICcjMjE5NkYzJyxcbiAgICAgICAgICAgICdwb3NpdGlvbic6ICdyaWdodCcsXG4gICAgICAgICAgICAndG9vbHRpcHMnOiBbJ9CT0LvQsNCy0L3QsNGPJywgJ9Cg0LDQsdC+0YLRiycsICfQptC10L3QsCcsICfQl9Cw0LrQsNC30LDRgtGMJ11cbiAgICAgICAgfSxcbiAgICAgICAgbm9ybWFsU2Nyb2xsRWxlbWVudHM6IG51bGwsXG4gICAgICAgIG5vcm1hbFNjcm9sbEVsZW1lbnRUb3VjaFRocmVzaG9sZDogNSxcbiAgICAgICAgdG91Y2hTZW5zaXRpdml0eTogNSxcbiAgICAgICAga2V5Ym9hcmRTY3JvbGxpbmc6IHRydWUsXG4gICAgICAgIHNlY3Rpb25TZWxlY3RvcjogJy5zZWN0aW9uJyxcbiAgICAgICAgYW5pbWF0ZUFuY2hvcjogZmFsc2UsXG5cbiAgICAgICAgLy9ldmVudHNcbiAgICAgICAgb25MZWF2ZTogZnVuY3Rpb24oaW5kZXgsIG5leHRJbmRleCwgZGlyZWN0aW9uKSB7fSxcbiAgICAgICAgYWZ0ZXJMb2FkOiBmdW5jdGlvbihhbmNob3JMaW5rLCBpbmRleCkge30sXG4gICAgICAgIGFmdGVyUmVuZGVyOiBmdW5jdGlvbigpIHt9LFxuICAgIH0pO1xuICAgICQoJy5zZWN0aW9uMScpLnZpZGUoe1xuICAgICAgICBtcDQ6ICcuLi9hc3NldHMvYmcubXA0JyxcbiAgICAgICAgcG9zdGVyOiAnLi4vYXNzZXRzL2ltZy9mYWNlLmpwZydcbiAgICB9LCB7XG4gICAgICAgIHZvbHVtZTogMSxcbiAgICAgICAgcGxheWJhY2tSYXRlOiAxLFxuICAgICAgICBtdXRlZDogdHJ1ZSxcbiAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgIHBvc2l0aW9uOiAnMCUgMCUnLCAvLyBTaW1pbGFyIHRvIHRoZSBDU1MgYGJhY2tncm91bmQtcG9zaXRpb25gIHByb3BlcnR5LlxuICAgICAgICAvLyAgcG9zdGVyVHlwZTogJ2RldGVjdCcsIC8vIFBvc3RlciBpbWFnZSB0eXBlLiBcImRldGVjdFwiIOKAlCBhdXRvLWRldGVjdGlvbjsgXCJub25lXCIg4oCUIG5vIHBvc3RlcjsgXCJqcGdcIiwgXCJwbmdcIiwgXCJnaWZcIiwuLi4gLSBleHRlbnNpb25zLlxuICAgICAgICByZXNpemluZzogdHJ1ZSwgLy8gQXV0by1yZXNpemluZywgcmVhZDogaHR0cHM6Ly9naXRodWIuY29tL1ZvZGthQmVhcnMvVmlkZSNyZXNpemluZ1xuICAgICAgICBiZ0NvbG9yOiAnIzAwMDAwJywgLy8gQWxsb3cgY3VzdG9tIGJhY2tncm91bmQtY29sb3IgZm9yIFZpZGUgZGl2LFxuICAgICAgICBjbGFzc05hbWU6ICd2aWRlbzEnIC8vIEFkZCBjdXN0b20gQ1NTIGNsYXNzIHRvIFZpZGUgZGl2XG4gICAgfSk7XG4gICAgJCgnLnNvdW5kJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICgkKCcuc291bmQgaScpLmhhc0NsYXNzKCdmYS12b2x1bWUtb2ZmJykpIHtcbiAgICAgICAgICAgICQoXCIudmlkZW8xIHZpZGVvXCIpLnByb3AoJ211dGVkJywgZmFsc2UpOyAvL211dGVcbiAgICAgICAgICAgICQoJy5zb3VuZCBpJykuYXR0cignY2xhc3MnLCAnZmEgZmEtdm9sdW1lLXVwJyk7XG4gICAgICAgICAgICBNYXRlcmlhbGl6ZS50b2FzdCgn0JfQstGD0Log0LLQutC70Y7Rh9C10L0nLCA0MDAwKSAvLyA0MDAwIGlzIHRoZSBkdXJhdGlvbiBvZiB0aGUgdG9hc3RcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoXCIudmlkZW8xIHZpZGVvXCIpLnByb3AoJ211dGVkJywgdHJ1ZSk7IC8vbXV0ZVxuICAgICAgICAgICAgJCgnLnNvdW5kIGknKS5hdHRyKCdjbGFzcycsICdmYSBmYS12b2x1bWUtb2ZmJyk7XG4gICAgICAgICAgICBNYXRlcmlhbGl6ZS50b2FzdCgn0JfQstGD0Log0LLRi9C60LvRjtGH0LXQvScsIDQwMDApIC8vIDQwMDAgaXMgdGhlIGR1cmF0aW9uIG9mIHRoZSB0b2FzdFxuICAgICAgICB9XG4gICAgfSk7XG4gICAgJChcIi5idXR0b24tY29sbGFwc2VcIikuc2lkZU5hdigpO1xufSk7XG4iXX0=
