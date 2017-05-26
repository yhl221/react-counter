var Counter = React.createClass({

    /* 1.创建阶段 */
    //在创建类的时候被调用
    getDefaultProps() {
        console.log("getDefaultProps");
        return {};
    },

    /* 2.实例化阶段 */
    //获取this.state的默认值
    getInitialState() {
        console.log('getInitialState');
        return {value: 0};
    },
    plus() {
        this.setState({
            value: ++this.state.value
        });
        if(this.state.value === 3){
            ReactDOM.unmountComponentAtNode(document.getElementById('app'))
        }
    },
    minus() {
        this.setState({
            value: --this.state.value
        });
    },

    //组件将要加载，在render之前调用此方法
    componentWillMount() {
        //业务逻辑的处理都应该放在这里，比如对state的操作等
        console.log('componentWillMount')
    },

    //组件完成加载，在render之后调用此方法
    componentDidMount() {
        //在该方法中，ReactJS会使用render方法返回的虚拟DOM对象来创建真实的DOM结构
        console.log('componentDidMount')
    },

    /* 3.更新阶段 */
    //该方法发生在this.props被修改或父组件调用setProps()方法之后
    componentWillReceiveProps() {
        console.log('Component WILL RECIEVE PROPS!')
    },
    //是否需要更新
    shouldComponentUpdate() {
        console.log('componentWillReceiveProps');
        return true;
        // return false;
    },
    //将要更新
    componentWillUpdate() {
        console.log('componentWillUpdate');
    },
    //更新完毕
    componentDidUpdate() {
        console.log('componentDidUpdate')
    },

    /* 4.销毁阶段 */
    //销毁时会被调用
    componentWillUnmount() {
        console.log('componentWillUnmount')
    },

    render: function() {
        return (
            <div>
            <button onClick={this.plus}>+</button>
        <span>{this.state.value}</span>
        {console.log('render')}
        <button onClick={this.minus}>-</button>
        </div>
        )
    }
});

ReactDOM.render(
<div>
<Counter/>
</div>,document.getElementById('app')
);